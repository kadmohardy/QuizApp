module.exports = {
  presets: [
    ['@babel/preset-env', { target: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@modules': './src/modules',
          '@config': './src/config',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};
