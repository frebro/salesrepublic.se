var config = require('./');

module.exports = {
  watch: [config.src + '/markup/**/*.html'],
  src: config.src + '/markup/**/*.html',
  dest: config.dest
};
