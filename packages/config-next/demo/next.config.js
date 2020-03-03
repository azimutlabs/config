const withEmotion = require('../withEmotion');
const withEslint = require('../withEslint');
const withSass = require('../withSass');
const withEnv = require('../withEnv');
const { compose } = require('../utils');

module.exports = compose(withEmotion, withEslint, withSass, withEnv)();
