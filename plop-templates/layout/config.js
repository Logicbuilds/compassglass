module.exports = {
  templateName: 'layout',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your layout name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give your layout a description.',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `src/components/layouts/{{pascalCase name}}/{{pascalCase name}}.tsx`,
      templateFile: 'plop-templates/layout/Layout.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/layouts/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
      templateFile: 'plop-templates/layout/Layout.test.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/layouts/{{pascalCase name}}/{{kebabCase name}}.scss`,
      templateFile: 'plop-templates/layout/Layout.scss.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/layouts/{{pascalCase name}}/default.ts`,
      templateFile: 'plop-templates/layout/default.js.hbs',
    },
    {
      type: 'add',
      path: `src/components/layouts/{{pascalCase name}}/index.ts`,
      templateFile: 'plop-templates/layout/index.js.hbs',
    },
  ],
};
