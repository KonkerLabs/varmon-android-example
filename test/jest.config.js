module.exports = {
    preset: "ts-jest",
    testRunner: "jest-circus/runner",
    testEnvironment: "../node_modules/varmon-jest/dist/JestEnvironment.js",
    reporters: [
        "default",
        "../node_modules/varmon-jest/dist/reporter/json-reporter.js",
    ],
    moduleNameMapper: {
        "^varmon-jest$": "varmon-jest/dist/utils/utils.js",
    },

    testEnvironmentOptions: {
        port: 4723,
        logLevel: "error",
        capabilities: {
            deviceName: "KernelTeste",
            platformName: "Android",
            appPackage: "com.google.android.calculator",
            appActivity: "com.android.calculator2.Calculator",
            automationName: "Appium",
            noReset: false,
            fullReset: false,
            newCommandTimeout: 180,
            // udid: "0039275638",
            autoGrantPermissions: true,
        },
    },
};
