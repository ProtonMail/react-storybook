import React from 'react';
import 'react-components/styles/index.scss';
import { storiesOf } from '@storybook/react';

import { Badge, Button, PrimaryButton, LinkButton, Alert, Breadcrumb, Price, Time } from 'react-components';

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

storiesOf('Badge', module)
  .add('Default', () => (
    <Badge>Default</Badge>
  ))
  .add('Success', () => (
    <Badge type="success">Success</Badge>
  ))
  .add('Origin', () => (
    <Badge type="origin">Origin</Badge>
  ))
  .add('Warning', () => (
    <Badge type="warning">Warning</Badge>
  ))
  .add('Error', () => (
    <Badge type="error">Error</Badge>
  ));

storiesOf('Breadcrumb', module)
  .add('Basic', () => (
    <Breadcrumb
      list={['riri', 'fifi', 'loulou']}
      current={1}
      onClick={(index) => console.log(index)}/>
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

storiesOf('Price', module)
  .add('Default', () => (
    <Price>{-1500}</Price>
  ))
  .add('with EUR currency', () => (
    <Price currency="EUR">{1500}</Price>
  ))
  .add('with USD currency', () => (
    <Price currency="USD">{1500}</Price>
  ))
  .add('with divisor', () => (
    <Price divisor={1}>{1500}</Price>
  ));

storiesOf('Time', module)
  .add('Default format', () => (
    <Time>{1552897937}</Time>
  ))
  .add('Custom format', () => (
    <Time format="LLL">{1552897937}</Time>
  ));