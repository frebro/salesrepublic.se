var config = require('./');

module.exports = {
  watch: [config.src + '/styles/**/*.css'],
  src: config.src + '/styles/*.css',
  dest: config.dest + '/styles'
};
