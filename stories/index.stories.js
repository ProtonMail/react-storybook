import React, { useState } from 'react';
import 'react-components/styles/index.scss';
import { storiesOf } from '@storybook/react';

import { Badge, Button, PrimaryButton, LinkButton, Alert, Breadcrumb, Price, Time, Toggle, useToggle, Progress, Select } from 'react-components';

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

storiesOf('Progress', module)
    .add('Default', () => {
      return <Progress value={30}  />
    });

const MySelect = () => {
  const options = [
    { text: 'option 1', value: 1 },
    { text: 'option 2', value: 2 },
    { text: 'option 3', value: 3 }
  ];
  const [value, setValue] = useState(options[1]);
  const handleChange = ({ target }) => {
    const newValue = target.value;
    alert(newValue);
    setValue(newValue);
  };
  return <Select value={value} options={options} onChange={handleChange} />
};

storiesOf('Select', module)
  .add('Default', () => (<MySelect />));

storiesOf('Time', module)
  .add('Default format', () => (
    <Time>{1552897937}</Time>
  ))
  .add('Custom format', () => (
    <Time format="LLL">{1552897937}</Time>
  ));

const MyToggle = () => {
  const { state, toggle } = useToggle(true);
  const handleChange = ({ target }) => {
    alert(target.checked);
    toggle();
  }
  return <Toggle cheched={state} onChange={handleChange} id="myToggle" />;
};

storiesOf('Toggle', module)
  .add('with useToggle', () => (<MyToggle />));
