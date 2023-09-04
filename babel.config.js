module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          src: './src',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@views': './src/views',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
