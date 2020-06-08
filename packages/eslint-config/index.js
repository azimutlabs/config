module.exports = {
  extends: ['./a11y', './jest', './react', './legacy', './prettier'].map(require.resolve),
};
