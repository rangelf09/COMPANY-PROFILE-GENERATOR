const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("can set office number", () => {
    const config = 23;
    const element = new Manager("me", 24, "test@test.com", config);
    expect(element.officeNum).toBe(config);
});

test("getRole() should return \"Manager\"",() => {
    const config = "Manager";
    const element = new Manager("me", 24, "test@test.com", 23);
    expect(element.getRole()).toBe(config);
});

test("can get office number from getOfficeNum()", () => {
    const config = 23;
    const element = new Manager("me", 24, "test@test.com", config);
    expect(element.getOfficeNum()).toBe(config);
});