export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: {},
    element: '#root',
    options: {},
    // Adding manual: false, we tell Storybook to check accessibility automatically.
    manual: false,
  },
}
