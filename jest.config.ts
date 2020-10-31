export default {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx'],
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
