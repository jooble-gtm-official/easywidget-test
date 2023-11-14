const fs = require("fs");
const path = require("path");

const sep = path.sep;

module.exports = (rootDir) => {
    fs.rmSync(rootDir + sep + 'index.js', { recursive: true, force: true });

    const dirs = fs.readdirSync(rootDir);

    const _dirs = dirs
        .filter(dirName => fs.statSync(rootDir + sep + dirName).isFile() && dirName.endsWith('.js'))

    const indexJs = _dirs.reduce((acc, fileName) => {
        const _fileName = fileName.replace('.js', '');

        const componentName = _fileName.split('-').map(a => a.charAt(0).toUpperCase() + a.substr(1)).join('');

        return acc.concat(`export { default as ${componentName} } from './${_fileName}';`).concat('\n');
    }, '')

    fs.writeFileSync(path.resolve(rootDir, './index.js'), indexJs)
};
