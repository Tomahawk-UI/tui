module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: [
    // TypeScript declaration files don't contain any CSS.
    '**/*.d.ts',
  ],
}
