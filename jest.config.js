/**@type {import('jest').Config} */

const jestConfig = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  detectOpenHandles: true,
  rootDir: './src',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: ['main.ts'],
};

module.exports = jestConfig;
