module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // ignorar pastas
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts" // arquivos que o jest execute antes dos tests
  ],
  transform: {
    //expressão regular transformando arquivos typescript para uma maneira que jest entende
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest" 
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx"
  ],
  coverageReporters: [
    "lcov",
    "json"
  ]
};