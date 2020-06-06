const fs = require('fs');
const path = require('path');

const componentsToExclude = ['InitializeRouting', 'App'];
const groupsToExclude = ['pages'];

async function wireupComponents() {
  const absPath = `${process.cwd()}/src/components`;

  for await (const group of await fs.promises.opendir(absPath)) {
    if (group.isDirectory() && !groupsToExclude.includes(group.name)) {
      const groupPath: string = path.join(absPath, group.name);
      const pathMatcher = '[PATH-NAME]';

      const contentTemplate = `export * from '${pathMatcher}';`;
      const exportItems = [
        '// This file is generated, do not change anyhing here',
      ];

      for await (const component of await fs.promises.opendir(groupPath)) {
        if (
          component.isDirectory() &&
          !componentsToExclude.includes(component.name)
        ) {
          const pathFragments = groupPath.split('/');
          const srcIndex = pathFragments.findIndex(
            (pathItem) => pathItem === 'src'
          );
          const contextPath = path.join(
            ...pathFragments.slice(srcIndex + 1),
            component.name
          );
          exportItems.push(contentTemplate.replace(pathMatcher, contextPath));
        }
      }

      if (exportItems.length > 1) {
        fs.writeFileSync(
          path.join(groupPath, 'index.ts'),
          exportItems.join('\n') + '\n',
          {
            encoding: 'utf-8',
          }
        );
      }
    }
  }
}
wireupComponents();
