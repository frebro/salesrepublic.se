var config = require('./');

module.exports = {
  open: false,
  server: {
    baseDir: config.dest,
    reloadOnRestart: true,
  }
};
