import React from "react";
import "react-components/styles/index.scss";
import { storiesOf } from "@storybook/react";

import {
  Autocomplete,
  useAutocomplete,
  AutocompleteSelection
} from "react-components";

const MultiselectAutocomplete = () => {
  const customItemList = [
    { id: 1, name: "first", lastName: "last" },
    { id: 2, name: "second", lastName: "last" },
    { id: 3, name: "third", lastName: "last" },
    { id: 4, name: "fourth", lastName: "last" },
    { id: 5, name: "fifth", lastName: "last" }
  ];
  const itemMapper = item => ({
    label: `${item.name} ${item.lastName}`,
    value: item
  });

  const {
    changeInputValue,
    selectedItems,
    inputValue,
    select,
    deselect
  } = useAutocomplete({ multiple: true, initialSelectedItems: [] });

  return (
    <Autocomplete
      inputValue={inputValue}
      onSelect={select}
      onInputValueChange={changeInputValue}
      list={customItemList}
      data={itemMapper}
      minChars={1}
    >
      {selectedItems.map((item, i) => (
        <AutocompleteSelection
          label={itemMapper(item).label}
          onRemove={() => deselect(i)}
        />
      ))}
    </Autocomplete>
  );
};

storiesOf("Autocomplete", module)
  .add("Basic", () => {
    return (
      <Autocomplete
        inputValue={"tion"}
        list={["option 1", "option 2", "option 3"]}
        minChars={1}
      />
    );
  })
  .add("Custom Multiselect", () => {
    return <MultiselectAutocomplete />;
  });