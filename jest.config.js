export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/test/**/*.test.ts"], // Looks for test files in `test/` folder
  clearMocks: true,
};