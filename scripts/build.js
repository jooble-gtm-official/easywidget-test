const webpack = require('webpack');

const chalk = require('react-dev-utils/chalk');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const paths = require('../config/paths');
const fs = require("fs");
const config = require('../config/webpack.prod.js');
const createBarrelFile = require('./createBarrelFile');

(function build(previousFileSizes) {

  fs.rmSync(paths.appDist, { recursive: true, force: true });

  createBarrelFile(paths.componentsDir);

  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((_err, stats) => {
      compiler.run((err, stats) => {
        let messages;

        if (err) {
          if (!err.message) {
            return reject(err);
          }
          messages = formatWebpackMessages({
            errors: [err.message],
            warnings: [],
          });
        } else {
          messages = formatWebpackMessages(
              stats.toJson({ all: false, warnings: true, errors: true })
          );
        }

        if (messages.errors.length) {
          if (messages.errors.length > 1) {
            messages.errors.length = 1;
          }
          return reject(new Error(messages.errors.join('\n\n')));
        }

        if (
            process.env.CI
            && (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false')
            && messages.warnings.length
        ) {
          console.log(
              chalk.yellow(
                  '\nTreating warnings as errors because process.env.CI = true.\n' +
                  'Most CI servers set it automatically.\n'
              )
          );
          return reject(new Error(messages.warnings.join('\n\n')));
        }

        return resolve({ stats, previousFileSizes, warnings: messages.warnings });
      });
    });
  });
})();
