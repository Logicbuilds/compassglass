const fs = require('fs');
const walk = require('./utils');

async function wireupTypes() {
  const matcherFn = (name: string) => name === 'types.ts';
  const startPath = `${process.cwd()}/src`;
  const pathMatcher = '[PATH-NAME]';
  const contentTemplate = `export * from '${pathMatcher}';`;
  const exportItems = ['// This file is generated, do not change anyhing here'];
  for await (const path of walk(startPath, matcherFn, 'src')) {
    exportItems.push(
      contentTemplate.replace(pathMatcher, path).replace('.ts', '')
    );
  }
  fs.writeFileSync(
    `${process.cwd()}/src/generated/typings.ts`,
    exportItems.join('\n') + '\n',
    { encoding: 'utf-8' }
  );
}
wireupTypes();
