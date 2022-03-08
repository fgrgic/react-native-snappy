![Snappy Icons](https://github.com/fgrgic/react-native-snappy/blob/main/assets/cover/cover.png?raw=true)

# Snappy Icons

Snappy icons is a collection of more than 350 open source icons designed on a 24x24 grid.
The icons are designed as svgs and this package converts them to be compatible with `react-native-svg` package.

## Installation

1. Make sure you have `react-native-svg` installed:

```zsh
yarn add react-native-svg
```

or

```zsh
npm i react native-svg
```

2. Add this package:

```zsh
yarn add react-native-snappy
```

or

```zsh
npm i react-native-snappy
```

## Available icons

Website in construction. The list of available icon names can be found [here](/src/Snappy/README.md).

## Usage

Icon names are formated in kebab case. E.g. to use `chevron-right` icon use:

```ts
import Snappy from 'react-native-snappy';

const App = () => {
  return <Snappy name='chevron-right' />;
};
```

Icons can be further configured with inline props:

```ts
<Snappy name='chevron-right' strokeWidth={1} size={40} color='#FF6666' />
```

### Props

| Prop              | Description                                                          | Default  |
| ----------------- | -------------------------------------------------------------------- | -------- |
| **`size`**        | Rectangular size of the icon.                                        | `24`     |
| **`color`**       | The stroke prop refers to the color outline the icon.                | `"#000"` |
| **`strokeWidth`** | The strokeWidth prop specifies the width of the outline on the icon. | `2`      |
