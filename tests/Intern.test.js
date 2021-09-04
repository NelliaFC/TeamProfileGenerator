 const { test, expect } = require("@jest/globals")
 const Intern = require("../lib/Intern")

 test("Intern", () => {
     
 })
test("intern() => {Can evoke Intern class", () => {
        const testValue = Intern
        const e = new Intern();
        expect(typeof(e)).toBe("object");
    });

    
test("getSchool() => {should return \"school\"", () => {
    const testValue = "school";
    const e = new Intern("Zoya", 2, "test@test.com", "school");
    expect(e.getSchool()).toBe(testValue);
})