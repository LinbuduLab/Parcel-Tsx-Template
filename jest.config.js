module.exports = {
  clearMocks: true,
  collectCoverage: true,

  collectCoverageFrom: ["src/*.{js,ts}", "src/**/*.{js,ts}"],

  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  coverageReporters: ["json", "text", "lcov", "clover"],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  testEnvironment: 'jsdom',
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testRegex: ['/test/.*\\.(test|spec)\\.(ts)$'],
  coverageDirectory: "coverage"
};
