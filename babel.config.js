module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          BaseComponents: './src/baseComponents',
          Components: './src/components',
          Screens: './src/screens',
          Styles: './src/assets/styles',
          Images: './src/assets/images',
          Constants: './src/constants',
          Utils: './src/utils',
          Reducers: './src/reducers',
          Services: './src/services',
          Store: './src/store',
          Root: './src',
          Hooks: './src/hooks',
          Env: './.env.js',
          Routes: './src/routes',
        },
      },
    ],
  ],
};
