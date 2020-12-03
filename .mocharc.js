module.exports = {
  bail: true,
  // exit: true,
  parallel: false,
  color: true,
  inlineDiffs: true,
  extension: ['js'],
  spec: ['./test/'],
  recursive: true,
  sort: true,
  // package: './package.json',
  // reporter: 'spec',
  // slow: 75,
  timeout: 20000,
  // ui: 'bdd',
  'watch-files': ['**/test/**/*.js'],
  // 'watch-ignore': ['lib/vendor']
};