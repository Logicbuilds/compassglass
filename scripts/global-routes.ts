const fs = require('fs');
const walk = require('./utils');

async function wireupRoutes() {
  const matcherFn = (name: string) => name === 'route.tsx';
  const startPath = `${process.cwd()}/src/components/pages`;
  const pathMatcher = '[PATH-NAME]';
  const contentTemplate = `export * from '${pathMatcher}';`;
  const exportItems = ['// This file is generated, do not change anyhing here'];
  for await (const path of walk(startPath, matcherFn, 'src')) {
    exportItems.push(
      contentTemplate.replace(pathMatcher, path).replace('.tsx', '')
    );
  }
  fs.writeFileSync(
    `${process.cwd()}/src/generated/routes.ts`,
    exportItems.join('\n') + '\n',
    { encoding: 'utf-8' }
  );
}
wireupRoutes();
