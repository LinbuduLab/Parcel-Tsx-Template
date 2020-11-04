export default {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx'],
  coveragePathIgnorePatterns: ['src/App.tsx', 'src/index.tsx'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  runner: 'jest-runner',
  setupFilesAfterEnv: ['jest-enzyme'],
  transform: { '\\.tsx?$': 'ts-jest' },
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
};
