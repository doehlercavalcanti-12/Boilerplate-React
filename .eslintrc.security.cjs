module.exports = {
  root: false,
  extends: ['./.eslintrc.cjs'],
  plugins: ['security'],
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'],
      plugins: ['security'],
      extends: ['plugin:security/recommended'],
      rules: {
        'security/detect-object-injection': 'off'
      }
    }
  ]
};
