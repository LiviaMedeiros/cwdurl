[![MIT License](https://img.shields.io/github/license/LiviaMedeiros/cwdurl)](https://github.com/LiviaMedeiros/cwdurl/blob/HEAD/LICENSE)
[![npm](https://img.shields.io/npm/v/cwdurl.svg)](https://npmjs.com/package/cwdurl)
![npm bundle size](https://img.shields.io/bundlephobia/min/cwdurl)

# `cwdurl`

`cwdurl` allows to work with Current Working Directory as URL

# Installation

```console
$ npm i cwdurl
```

# Usage

```mjs
import * as cwd from 'cwdurl';

// returns CWD with trailing directory separator
const path = cwd.path(); // /path/to/current/working/directory/

// returns CWD as URL instance
const url = cwd.url(); // file:///path/to/current/working/directory/

// returns CWD as urlstring
const href = cwd.href(); // file:///path/to/current/working/directory/

// resolves relative URL against CWD, returns URL instance
const fileInCwd = cwd.resolve('infile.txt'); // file:///path/to/current/working/directory/infile.txt
const fileOutCwd = cwd.resolve('..', 'outfile.txt'); // file:///path/to/current/working/infile.txt
const ignoreCWD = cwd.resolve('file:///home/absfile.txt'); // file:///home/absfile.txt

// changes CWD using URL
cwd.cd('../../other/directory'); // changes to /path/to/current/other/directory/
cwd.cd('file:///tmp'); // changes to /tmp/
```

# Environment variables

If `CWDURL_PERSIST` is set, CWD values will be cached at import time and become immutable. `cwd.url()` will return frozen `URL` instance.

# License

[MIT](https://github.com/LiviaMedeiros/cwdurl/blob/HEAD/LICENSE)
