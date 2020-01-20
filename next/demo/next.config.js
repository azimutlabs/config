const withEslint = require('../withEslint');
const withSass = require('../withSass');

module.exports = withEslint(withSass());
