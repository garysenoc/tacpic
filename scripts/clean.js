const del = require('del');
const fs = require('fs-extra');

del.sync(['dist/**', 'lib/**', 'build/**']);

fs.copySync('public', 'build');
