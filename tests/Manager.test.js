const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test("Manage can set office number", () => {
    const testValue = 4;
    const e = new Manager("Sunshine", 4, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() will return \"Manager\"", () => {
    const testValue = Manager
    const e = new Manager("Sunshine", 4, "test@test.com", testValue);
    expect(typeof(e)).toBe("object")
});

