import { sep } from 'node:path';
import { chdir, cwd, env } from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const _persist = !!env.CWDURL_PERSIST;

let path, url, href;

if (_persist) {
  const _cwd = cwd();
  const _path = _cwd + sep;
  const _url = Object.freeze(pathToFileURL(_path));
  Object.freeze(_url.searchParams);
  const _href = _url.href;

  path = function path() {
    return _path;
  };

  url = function url() {
    return _url;
  };

  href = function href() {
    return _href;
  };
} else {
  path = function path() {
    return cwd() + sep;
  };

  url = function url() {
    return pathToFileURL(path());
  };

  href = function href() {
    return url().href;
  };
}

function resolve(...urls) {
  const last = urls.length - 1;
  return urls.reduce(
    (a, c, i) => new URL(last === i ? c : c.replace(/\/*$/, '/'), a),
    url(),
  );
}

function cd(dir) {
  return chdir(fileURLToPath(resolve(dir)));
}

export {
  cd,
  href,
  path,
  resolve,
  url,
};
