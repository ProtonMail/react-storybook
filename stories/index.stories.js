import React, { useState, useEffect } from 'react';
import 'react-components/styles/index.scss';
import { storiesOf } from '@storybook/react';
import pokedex from '../pokedex.js';

import { Badge, Button, PrimaryButton, LinkButton, Alert, Breadcrumb, Price, Time, Toggle, useToggle, Progress, Select, Pagination, usePagination, usePaginationAsync, useModal, Modal, ContentModal, FooterModal, ResetButton, ConfirmModal, Href, Info, LearnMore, Tooltip, Icon } from 'react-components';

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

storiesOf('Link', module)
  .add('Href', () => (<Href url="https://protonmail.com">ProtonMail</Href>))
  .add('Info', () => (<Info url="https://protonmail.com" title="ProtonMail" />))
  .add('LearnMore', () => (<LearnMore url="https://protonmail.com" />));

const MyModal = ({ type }) => {
  const { isOpen, open, close } = useModal();
  const title = 'MyModal';
  const handleSubmit = () => alert('submit');
  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <Modal show={isOpen} onClose={close} title={title} type={type}>
        <ContentModal onSubmit={handleSubmit} onReset={close}>
          <p>My modal</p>
          <FooterModal>
            <ResetButton>Cancel</ResetButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </FooterModal>
        </ContentModal>
      </Modal>
    </>
  );
};

storiesOf('Icon', module)
  .add('example: caret', () => (<Icon name="caret" />));

storiesOf('Modal', module)
  .add('Basic', () => (<MyModal />))
  .add('Small', () => (<MyModal type="small" />));
  // .add('Confirm', () => (<MyConfirmModal />))
  // .add('Input', () => (<MyInputModal />));

const MyPagination = () => {
  const { page, list, onNext, onPrevious, onSelect } = usePagination(pokedex);

  return (
    <>
      <ul>
        {list.map(({ name, type }) => (<li>{name.english} ({type.join(', ')})</li>))}
      </ul>
      <Pagination page={page} onNext={onNext} onPrevious={onPrevious} onSelect={onSelect} />
    </>
  );
};

const MyPaginationAsync = () => {
  const { page, onNext, onPrevious, onSelect } = usePaginationAsync(1);
  const limit = 10;
  const [list, setList] = useState([]);

  const queryAPI = () => {
    setTimeout(() => {
      setList([...pokedex].splice((page - 1) * limit, limit));
    }, 500);
  };

  useEffect(() => {
    queryAPI();
  }, page);

  return (
    <>
      <ul>
        {list.map(({ name, type }) => (<li>{name.english} ({type.join(', ')})</li>))}
      </ul>
      <Pagination page={page} onNext={onNext} onPrevious={onPrevious} onSelect={onSelect} />
    </>
  );
};

storiesOf('Pagination', module)
  .add('Basic', () => (<MyPagination />))
  .add('Async', () => (<MyPaginationAsync />));

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

storiesOf('Tooltip', module)
  .add('Default', () => (<Tooltip title="ProtonMail"><Button>Hover me</Button></Tooltip>))
  .add('with placement', () => (<Tooltip title="ProtonMail" placement="bottom"><Button>Hover me</Button></Tooltip>))
  .add('with trigger', () => (<Tooltip title="ProtonMail" trigger="click"><Button>Click on me</Button></Tooltip>));
