module.exports = {
    roots: ["<rootDir>/__tests__"],
    preset: 'ts-jest',
    verbose: true,
    globals: {
        IS_REACT_ACT_ENVIRONMENT: true,
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
        "\\.[jt]sx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.(js|ts)$": "ts-jest",
        "\\.js$": "<rootDir>/node_modules/babel-jest",
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',
    },
    testMatch: [
        "**/?(*.)+(test).ts?(x)",
        "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: { "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js" }
};

