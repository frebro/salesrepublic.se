var config = require('./');

module.exports = {
  watch: [config.src + '/images/**/*'],
  src: config.src + '/images/**/*',
  dest: config.dest + '/images'
};
