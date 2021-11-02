module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/"], // ignorar pastas
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts" // arquivos que o jest execute antes dos tests
  ],
  transform: {
    //expressão regular transformando arquivos typescript para uma maneira que jest entende
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest" 
  },
  testEnvironment: 'jsdom' 
};