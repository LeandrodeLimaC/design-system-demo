import { themeDecorator } from "./themeDecorator";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  layout: 'centered',
  controls: { sort: 'requiredFirst' },
};

export const decorators = [ themeDecorator ];
