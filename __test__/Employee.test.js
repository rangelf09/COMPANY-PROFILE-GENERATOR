const Employee = require("../lib/Employee");




test("can set id", () => {
    const config = 23;
    const element = new Employee ("me",config);
    expect(element.id).toBe(config);
});

test("can set name", () => {
    const config = "me";
    const element = new Employee (config);
    expect(element.name).toBe(config);
});

test("can set email", () => {
    const config = "test@test.com";
    const element = new Employee ("me", 23, config);
    expect(element.email).toBe(config);
});


test("can get id from getId()", () => {
    const config = 23;
    const element = new Employee ("me", config);
    expect(element.getId()).toBe(config);
});

test("can get name from getName()", () => {
    const config = "me";
    const element = new Employee (config);
    expect(element.getName()).toBe(config);
});

test("can get email from getEmail()", () => {
    const config = "test@test.com";
    const element = new Employee ("me", 23, config);
    expect(element.getEmail()).toBe(config);
});


test("getRole() should return \"Employee\"", () => {
    const config = "Employee";
    const element = new Employee ("me", 24, "test@test.com");
    expect(element.getRole()).toBe(config);
});