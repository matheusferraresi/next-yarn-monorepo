// const withTM = require('next-transpile-modules');

// module.exports = withTM({
//   // transpileModules: ['../shared'],
//   webpack: (config, options) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       // Will make webpack look for these modules in parent directories
//       '@Shared': '../shared',
//     };
//     return config;
//   },
// });


module.exports = {
  webpack: config => {
    
    config.module.rules.forEach((rule) => {
      const ruleContainsTs = rule.test.toString().includes('js');
    
      if (ruleContainsTs && rule.use && rule.use.loader === 'next-babel-loader') {
        rule.include = undefined;
      }
    });

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
}