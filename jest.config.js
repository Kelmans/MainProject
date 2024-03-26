module.exports = {
  testEnvironment: 'jest-environment-jsdom-global',
  testRegex: '/.*\\.(?:test|spec)\\.js$',
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
};
