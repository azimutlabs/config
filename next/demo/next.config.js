const withEslint = require('../withEslint');
const withSass = require('../withSass');
const withEnv = require('../withEnv');

module.exports = withEnv(withEslint(withSass()));
