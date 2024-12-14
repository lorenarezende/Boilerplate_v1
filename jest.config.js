export const testEnvironment = 'jsdom'
export const testPathIgnorePatterns = ['/node_modules/', '/.next/']
export const collectCoverage = true
export const collectCoverageFrom = ['src/**/*.ts(x)?']
export const setupFilesAfterEnv = ['<rootDir>/.jest/setup.ts']
export const modulePaths = ['<rootDir>/src/']
export const transform = {
  '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
}
