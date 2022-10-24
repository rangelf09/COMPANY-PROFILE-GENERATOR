const Engineer = require("../lib/Engineer");

test("can set Github account", () => {
    const config = "Github";
    const element = new Engineer("me", 24, "test@test.com", config);
    expect(element.github).toBe(config);
});

test("getRole() should return \"Engineer\"",() => {
    const config = "Engineer";
    const element = new Engineer("me", 24, "test@test.com", "Github");
    expect(element.getRole()).toBe(config);
});

test("can get Github username from getGithub()", () => {
    const config = "Github";
    const element = new Engineer("me", 24, "test@test.com", config);
    expect(element.getGithub()).toBe(config);
});