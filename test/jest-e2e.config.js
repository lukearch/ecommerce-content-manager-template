/**@type {import('jest').Config} */

const defaultJestConfig = require('../jest.config');

const jestConfig = {
  ...defaultJestConfig,
  rootDir: '.',
  testRegex: '.*\\.e2e-spec\\.ts$',
};

module.exports = jestConfig;
