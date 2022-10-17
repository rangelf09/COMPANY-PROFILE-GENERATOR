const path = require('path');
const fs  = require('fs');

const sourceDir = path.resolve(__dirname, "../src");

const render = members => {
    const html = [];

    html.push(...members
        .filter(member => member.getRole() === 'Manager')
        .map(manager => renderManager(manager))
    );
     html.push(...members
        .filter(member => member.getRole() === 'Engineer')
        .map(engineer => renderEngineer(engineer))
    );
     html.push(...members
        .filter(member => member.getRole() === 'Intern')
        .map(intern => renderIntern(intern))
    );
    return renderMain(html.join(""));
};

const renderManager = manager => {
    let source =fs.readFileSync(path.resolve(sourceDir, "manager.html"), "utf8");
    source = replacePlaceholders(source, 'name', manager.getName());
    source = replacePlaceholders(source, 'role', manager.getRole());
    source = replacePlaceholders(source, 'email', manager.getEmail());
    source = replacePlaceholders(source, 'id', manager.getId());
    source = replacePlaceholders(source, 'officeNum', manager.getOfficeNum());
    return source;
};

const renderEngineer = engineer => {
    let source =fs.readFileSync(path.resolve(sourceDir, "engineer.html"), "utf8");
    source = replacePlaceholders(source, 'name', engineer.getName());
    source = replacePlaceholders(source, 'role', engineer.getRole());
    source = replacePlaceholders(source, 'email', engineer.getEmail());
    source = replacePlaceholders(source, 'id', engineer.getId());
    source = replacePlaceholders(source, 'github', engineer.getGithub());
    return source;
};

const renderIntern = intern => {
    let source =fs.readFileSync(path.resolve(sourceDir, "intern.html"), "utf8");
    source = replacePlaceholders(source, 'name', intern.getName());
    source = replacePlaceholders(source, 'role', intern.getRole());
    source = replacePlaceholders(source, 'email', intern.getEmail());
    source = replacePlaceholders(source, 'id', intern.getId());
    source = replacePlaceholders(source, 'school', intern.getSchool());
    return source;
};


const renderMain = html => {
    const source = fs.readFileSync(path.resolve(sourceDir, "main.html"), "utf8");
    return replacePlaceholders(source, 'team', html);
};

const replacePlaceholders = (source, placeholder, value) =>{
    const patterns = new RegExp("{{" + placeholder + "}}", "gm");
    return source.replace(patterns, value);
};

module.exports = render;