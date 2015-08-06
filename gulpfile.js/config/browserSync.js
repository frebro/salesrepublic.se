var config = require('./');

module.exports = {
  server: {
    baseDir: config.dest,
    reloadOnRestart: true,
    open: false
  }
};
