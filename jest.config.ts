const config = {
  globals: {
    "ts-jest": {},
  },
  moduleDirectories: ["src"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src"
  },
  preset: "ts-jest",
  testPathIgnorePatterns: [".ts-node"],
  verbose: true,
}

export default config
