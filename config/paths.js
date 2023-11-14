const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  components: resolveApp('src/teleporthq/components/index.js'),
  componentsDir: resolveApp('src/teleporthq/components'),
  rootCss: resolveApp('src/teleporthq/style.css'),
  appDist: resolveApp('dist'),
};
