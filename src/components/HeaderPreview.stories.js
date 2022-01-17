import React from 'react';

import HeaderPreview from './HeaderPreview';

import { withDesign } from 'storybook-addon-designs';

export default {
  component: HeaderPreview,
  title: 'HeaderPreview',
  decorators: [withDesign],
};

const Template = args => <HeaderPreview {...args} />;

export const Default = Template.bind({});

