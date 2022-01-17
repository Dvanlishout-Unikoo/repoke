import React from 'react';

import HeaderTeamPreview from './HeaderTeamPreview';

import { withDesign } from 'storybook-addon-designs';

export default {
  component: HeaderTeamPreview,
  title: 'HeaderTeamPreview',
  decorators: [withDesign],
};

const Template = args => <HeaderTeamPreview {...args} />;

export const Default = Template.bind({});

