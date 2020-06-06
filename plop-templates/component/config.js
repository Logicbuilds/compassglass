const fs = require('fs');
const path = require('path');

const baseURL = path.join(process.cwd(), 'src', 'components');
const componentDirectories = fs.readdirSync(baseURL);
const defaultPath = componentDirectories.find((directory) =>
  directory.includes('common')
);

module.exports = {
  templateName: 'component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give your component a description.',
    },
    {
      type: 'list',
      name: 'path',
      choices: componentDirectories.filter(
        (item) =>
          fs.lstatSync(`${baseURL}/${item}`).isDirectory() &&
          !item.match('pages') &&
          !item.match('layouts')
      ),
      message: `Where you would like to add the component (${defaultPath})?`,
      default: defaultPath,
    },
  ],
  actions: [
    {
      type: 'add',
      path: `src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
      templateFile: 'plop-templates/component/Component.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
      templateFile: 'plop-templates/component/Component.test.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/{{path}}/{{pascalCase name}}/{{kebabCase name}}.scss`,
      templateFile: 'plop-templates/component/Component.scss.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/{{path}}/{{pascalCase name}}/index.ts`,
      templateFile: 'plop-templates/component/index.js.hbs',
    },
  ],
};
