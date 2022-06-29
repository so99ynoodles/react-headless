# headless-react

Headless React components with [`@react-aria`](https://react-spectrum.adobe.com/react-aria/index.html) and [`@react-stately`](https://react-spectrum.adobe.com/react-stately/index.html).

## Getting Started

```
$ npm install @headless-react/combobox
```

```jsx
import { ComboBox } from '@headless-react/combobox'

const AutoComplete = ({
  label,
  items
}) => {

  return (
    <ComboBox defaultItems={items}>
      <ComboBox.Label>{label}</ComboBox.Label>
      <ComboBox.InputGroup>
        {({ selectedItem }) => (
          <>
            <ComboBox.Input />
            <ComboBox.PopoverTrigger>
          </>
        )}
      </ComboBox.InputGroup>
      <ComboBox.Popover>
        <ComboBox.Options>
          {({ options }) => options.map(option => (
            <ComboBox.Option key={option.key} option={option}>
              {option.name}
            </ComboBox.Option>
          ))}
        </ComboBox.Options>
      </ComboBox.Popover>
    </ComboBox>
  )
}
```

## Components
- [x] ComboBox
  - [x] Single
  - [x] Multi
- [x] Select
  - [x] Single
  - [x] Multi
- [ ] Menu
- [ ] RadioGroup

...something we need

## Examples on CodeSandBox

- [Select Example](https://codesandbox.io/s/headless-react-select-rte4ze?file=/src/App.tsx)
- [ComboBox Example](https://codesandbox.io/s/headless-react-combobox-yseg1j?file=/src/App.tsx)
