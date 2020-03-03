const withStylelint = require('../withStylelint');
const withEmotion = require('../withEmotion');
const withEslint = require('../withEslint');
const withLodash = require('../withLodash');
const withSass = require('../withSass');
const withEnv = require('../withEnv');
const { compose } = require('../utils');

module.exports = compose(withStylelint, withLodash, withEmotion, withEslint, withSass, withEnv)();
