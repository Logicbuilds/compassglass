const fs = require('fs');
const path = require('path');

module.exports = async function* walk(
  absPath: string,
  matcherFn: (fileName: string) => boolean,
  rootDir: string
) {
  for await (const item of await fs.promises.opendir(absPath)) {
    const entry: string = path.join(absPath, item.name);
    if (item.isDirectory()) yield* walk(entry, matcherFn, rootDir);
    else if (item.isFile() && matcherFn(item.name)) {
      const pathFragments = absPath.split(path.sep);
      const srcIndex = pathFragments.findIndex(
        (pathItem) => pathItem === rootDir
      );
      const contextPath = path.join(...pathFragments.slice(srcIndex + 1));
      // Normalize path to use forward slashes for imports
      yield path.join(contextPath, item.name).replace(/\\/g, '/');
    }
  }
};
