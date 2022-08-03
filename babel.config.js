// {
//     "presets": [
//         ["env", {
//             "modules": false
//         }]
//     ],

//     "env": {
//         "test": {
//             "presets":  [
//                 ["@babel/preset-env", { targets: { node: 'current' } }],
//                 '@babel/preset-typescript',
//                 'next/babel'
//               ]
//             "plugins": ["transform-es2015-modules-commonjs"]
//         }
//     }
// }

module.exports = function(api){
  const presets= [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'next/babel'
    
  ]
  const plugins= [
    ['styled-components', { "ssr": true }]
  ]

  api.cache(false);

  return {
    presets,
    plugins
  };
}