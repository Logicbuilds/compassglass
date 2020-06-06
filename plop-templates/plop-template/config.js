module.exports = {
  templateName: 'plop-template',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your template name?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `plop-templates/{{kebabCase name}}/config.js`,
      templateFile: 'plop-templates/plop-template/config.js.hbs',
    },
    {
      type: 'add',
      path: `plop-templates/{{kebabCase name}}/index.js.hbs`,
      templateFile: 'plop-templates/plop-template/index.js.hbs',
    },
  ],
};
