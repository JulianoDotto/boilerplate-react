module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', 'src/**/*.js(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
