import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json', // Your TypeScript configuration file
    }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: ['node_modules/'], // Adjust if needed
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust based on your project structure
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};


export default config;
