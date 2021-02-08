module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', '@react-native-community'],
  plugins: ['import', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['app'],
        alias: {
          _assets: './app/assets',
          _components: './app/components',
          _atoms: './app/components/atoms',
          _molecules: './app/components/molecules',
          _organisms: './app/components/organisms',
          _config: './app/config',
          _hooks: './app/hooks',
          _languages: './app/languages',
          _navigations: './app/navigations',
          _redux: './app/redux',
          _screens: './app/screens',
          _services: './app/services',
          _styles: './app/styles',
          _utils: './app/utils',
        },
      },
    },
  },
};
