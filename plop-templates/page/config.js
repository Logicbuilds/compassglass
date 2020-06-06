const fs = require('fs');
const path = require('path');

const baseURL = path.join(process.cwd(), 'src', 'components', 'layouts');
const layouts = fs.readdirSync(baseURL);

module.exports = {
  templateName: 'page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your page name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give your page a description.',
    },
    {
      type: 'list',
      name: 'layout',
      choices: layouts.filter((item) =>
        fs.lstatSync(`${baseURL}/${item}`).isDirectory()
      ),
      message: `Please select a layout for your page`,
    },
  ],
  actions: [
    {
      type: 'add',
      path: `src/components/pages/{{pascalCase name}}/{{pascalCase name}}.tsx`,
      templateFile: 'plop-templates/page/Page.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
      templateFile: 'plop-templates/page/Page.test.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/pages/{{pascalCase name}}/{{kebabCase name}}.scss`,
      templateFile: 'plop-templates/page/Page.scss.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/pages/{{pascalCase name}}/default.ts`,
      templateFile: 'plop-templates/page/default.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/pages/{{pascalCase name}}/route.tsx`,
      templateFile: 'plop-templates/page/route.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/pages/{{pascalCase name}}/index.ts`,
      templateFile: 'plop-templates/page/index.js.hbs',
    },
  ],
};
