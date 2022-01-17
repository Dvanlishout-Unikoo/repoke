import React from 'react';

import HeaderComponent from './Header-component';

import { withDesign } from 'storybook-addon-designs';

export default {
  component: HeaderComponent,
  title: 'Header-Component',
  decorators: [withDesign],
};