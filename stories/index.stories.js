import React from 'react';
import 'react-components/styles/index.scss';
import { storiesOf } from '@storybook/react';

import { Button } from 'react-components';

storiesOf('Button', module)
  .add('Basic Button', () => (
    <Button>Hello Button</Button>
  ));