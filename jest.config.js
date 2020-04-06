module.exports = {
	setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
	collectCoverage: false,
	collectCoverageFrom: ["**/src/**/*.js"],
	coverageDirectory: "./coverage",
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	testMatch: [
		"**/__tests__/**/*.js?(x)",
		"**/?(*.)(-test).js?(x)"
	],
	moduleNameMapper: {
		"\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>src/__mocks__/file.js",
	}
};
