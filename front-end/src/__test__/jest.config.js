module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
