const Intern = require("../lib/Intern");


test("can set school", () => {
    const config = "UT Austin";
    const element = new Intern("me", 24, "test@test.com", config);
    expect(element.school).toBe(config);
});

test("getRole() should return \"Intern\"",() => {
    const config = "Intern";
    const element = new Intern("me", 24, "test@test.com", "UT Austin");
    expect(element.getRole()).toBe(config);
});

test("can get school from getSchool()", () => {
    const config = "UT Austin";
    const element = new Intern("me", 24, "test@test.com", config);
    expect(element.getSchool()).toBe(config);
});