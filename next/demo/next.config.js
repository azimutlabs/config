const withEslint = require('../withEslint');
const withSass = require('../withSass');
const withEnv = require('../withEnv');
const compose = require('../compose');

module.exports = compose(withEslint, withSass, withEnv)();
