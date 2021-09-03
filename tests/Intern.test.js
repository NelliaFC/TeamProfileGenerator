const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test("intern", () => {
    it( "Can evoke Intern class", () => {
        const testValue = Intern
        const e = new Intern();
        expect(typeof(e)).toBe("object");
    });
});

test("getRole () => { should return \"Intern\"", () => {
        const testValue = "Intern";
        const e = new Intern("Zoya", 2, "test@test.com", "school");
        expect(e.getSchool()).toBe(testValue);
    });
    
test("getSchool()   => {should return \"schoolName\"", () => {
    const testValue = "school";
    const e = new Intern("Zoya", 2, "test@test.com", "school");
    expect(e.getSchool()).toBe(testValue);
})