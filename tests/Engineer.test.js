 const { it, expect } = require("@jest/globals")
 const Engineer = require("../lib/Engineer")

 describe("Engineer", () => {
    it( "Can evoke Engineer class", () => {
        const e = new Engineer();
        expect(typeof(e)).toBe("object");

    });
 
 });

describe("getRole", () => {
    it("getRole() should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const e = new Engineer("Alice", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    });
})

 describe("getGithub", () => {
     it("getGitHub()  should return \"github user\"" , () => {
         const testValue = "gitHub";
         const e = new Engineer("Bob", 1, "test@test.com", testValue);
         expect(e.getGithub()).toBe(testValue);
     });
 });   
