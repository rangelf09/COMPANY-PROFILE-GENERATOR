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
        .filter(member => member.getRole() === 'intern')
        .map(intern => renderIntern(intern))
    );
    return renderMain(html.join(""));
};

const renderManager = manager => {
    let source =fs.readFileSync(path.resolve(sourceDir, "manager.html"), "utf8");
    source = replacePlaceholders(template, 'name', manager.getName());
    source = replacePlaceholders(template, 'role', manager.getRole());
    source = replacePlaceholders(template, 'email', manager.getEmail());
    source = replacePlaceholders(template, 'id', manager.getId());
    source = replacePlaceholders(template, 'officeNum', manager.getofficeNum());
};

const renderEngineer = engineer => {
    let source =fs.readFileSync(path.resolve(sourceDir, "engineer.html"), "utf8");
    source = replacePlaceholders(template, 'name', engineer.getName());
    source = replacePlaceholders(template, 'role', engineer.getRole());
    source = replacePlaceholders(template, 'email', engineer.getEmail());
    source = replacePlaceholders(template, 'id', engineer.getId());
    source = replacePlaceholders(template, 'github', engineer.getGithub());
};

const renderIntern = intern => {
    let source =fs.readFileSync(path.resolve(sourceDir, "intern.html"), "utf8");
    source = replacePlaceholders(template, 'name', intern.getName());
    source = replacePlaceholders(template, 'role', intern.getRole());
    source = replacePlaceholders(template, 'email', intern.getEmail());
    source = replacePlaceholders(template, 'id', intern.getId());
    source = replacePlaceholders(template, 'school', intern.getSchool());
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