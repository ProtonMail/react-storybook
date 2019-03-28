import React from 'react';
import 'react-components/styles/index.scss';
import { storiesOf } from '@storybook/react';

import { Button, PrimaryButton, LinkButton, Alert } from 'react-components';

storiesOf('Alert', module)
  .add('Info', () => (
    <Alert>Info</Alert>
  ))
  .add('Warning', () => (
    <Alert type="warning">Warning</Alert>
  ))
  .add('Error', () => (
    <Alert type="error">Error</Alert>
  ))
  .add('with LearnMore link', () => (
    <Alert learnMore="https://protonmail.com">Info</Alert>
  ));

storiesOf('Button', module)
  .add('Basic', () => (
    <Button>Hello Button</Button>
  ))
  .add('Primary button', () => (
    <PrimaryButton>Hello Button</PrimaryButton>
  ))
  .add('Link button', () => (
    <LinkButton>Hello Button</LinkButton>
  ));