export default {
  preset: "ts-jest/presets/default-esm", // Use ts-jest with ESM
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/test/**/*.test.ts"], // Test files in `test/` folder
  clearMocks: true,
  noStackTrace: true, // Disable stack traces
  silent: true, 
  extensionsToTreatAsEsm: [".ts"], // Treat `.ts` files as ESM
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1" // Ensure Jest resolves `.js` imports correctly
  }
};

