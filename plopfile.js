require('dotenv').config();

const templates = require('./plop-templates/configs.generated.json');
module.exports = (plop) => {
  templates.map(({ templateName, prompts, actions }) => {
    return plop.setGenerator(templateName, {
      description: `${process.env.APP_NAME} create ${templateName}`,
      prompts,
      actions,
    });
  });
};
