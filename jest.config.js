module.exports = {
  setupFilesAfterEnv: ['given2/setup', 'jest-plugin-context/setup'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '^@assets(.*)&': '<rootDir>/src/assets$1',
    "^@components(.*)$": "<rootDir>/src/components$1",
    '^@atoms(.*)$':  '<rootDir>/src/components/atoms$1',
    '^@molecules(.*)$':  '<rootDir>/src/components/molecules$1',
    '^@organisms(.*)$':  '<rootDir>/src/components/organisms$1',
    '^@pages(.*)$':  '<rootDir>/src/pages$1',
    '^@store(.*)$':  '<rootDir>/src/store$1',
    '^@utils(.*)$':  '<rootDir>/src/utils$1',
    '^@api(.*)$':  '<rootDir>/src/api$1',
  }
};
