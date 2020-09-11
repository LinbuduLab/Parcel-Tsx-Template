module.exports = {
  clearMocks: true,
  collectCoverage: true,

  collectCoverageFrom: ['src/*.{js,ts}', 'src/**/*.{js,ts}'],

  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  // testEnvironment: 'jsdom',
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  runner: 'jest-runner',
  setupFilesAfterEnv: ['jest-enzyme'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  coverageDirectory: 'coverage',
};
