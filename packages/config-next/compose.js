module.exports = (...fns) => args => fns.reduceRight((acc, cur) => cur(acc), args);
