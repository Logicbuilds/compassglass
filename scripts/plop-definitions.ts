const fs = require('fs');
const path = require('path');

const plopTemplateBase = path.resolve(process.cwd(), 'plop-templates');
const templateDefinitions = fs.readdirSync(plopTemplateBase);

if (templateDefinitions.length === 0) {
  console.error(
    `[ERROR] You have no template definitions in your "plop-templates" directory`
  );
  process.exit(1);
}

(async () => {
  const templateConfigs: Array<Promise<any>> = templateDefinitions
    .filter((definitionDir: string) =>
      fs.lstatSync(`${plopTemplateBase}/${definitionDir}`).isDirectory()
    )
    .map((definition: string) => {
      try {
        return import(`${plopTemplateBase}/${definition}/config.js`);
      } catch (error) {
        throw new Error(error);
      }
    });

  const resolvedConfigs = await Promise.all(templateConfigs);

  const configs = resolvedConfigs.map((config) => config.default);
  fs.writeFileSync(
    `${plopTemplateBase}/configs.generated.json`,
    JSON.stringify(configs, null, 2)
  );
})();
