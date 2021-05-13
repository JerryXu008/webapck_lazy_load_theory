const path = require('path');

// node中的api
const appDir = process.cwd();

console.log("路径",appDir)
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

module.exports = resolveApp;
