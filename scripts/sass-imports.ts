const fs = require('fs');
const walk = require('./utils');

async function wireupSass() {
  const matcherFn = (name: string) =>
    name.includes('.scss') && !name.includes('_') && name !== 'index.scss';
  const startPath = `${process.cwd()}/src`;
  const pathMatcher = '[PATH-NAME]';
  const contentTemplate = `@import '${pathMatcher}';`;
  const fileComment = '// This file is generated, do not change anyhing here';
  const exportItems = [];
  for await (const path of walk(startPath, matcherFn, 'src')) {
    exportItems.push(contentTemplate.replace(pathMatcher, path));
  }
  exportItems.push(fileComment);
  fs.writeFileSync(
    `${process.cwd()}/src/generated/index.scss`,
    exportItems.reverse().join('\n') + '\n',
    { encoding: 'utf-8' }
  );
}
wireupSass();
