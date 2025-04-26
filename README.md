# react-native-toastified

A lightweight and Android-styled toast component for React Native with simple-to-use method and cross-platform support.

---

## Features

- **Cross-platform** support for both iOS and Android.
- **Easy-to-use** API for showing toast messages.
- **animations** for smooth, non-intrusive notifications.
- No dependencies other than `react` and `react-native`.

---

## Installation

To install `react-native-toastified` in your React Native project, use npm or yarn:

```bash
npm install react-native-toastified
# or
yarn add react-native-toastified
```

---

## Usage

After installation, you can use the `CustomToast` component anywhere in your app once you setup the `CustomToastWrapper` in your main `_layout.tsx/jsx` or `App.jsx/tsx` file

### 1. Import the component wrapper and the component

#### In this example, I am using both components in a single file but it can be used seperately in another file after putting the `CustomToastWrapper` component in the main file as the last child of the view.

Import the `CustomToastWrapper` and `CustomToast` component:

```tsx
import { CustomToastWrapper }, CustomToast from "react-native-toastified";
```

### 2. Mount the Toast Wrapper

The `CustomToastWrapper` component should be placed as the last child element in your component hierarchy or view.

```tsx
// App.tsx
import React from "react";
import { View, Button } from "react-native";
import CustomToast, { CustomToastWrapper } from "react-native-toastified";

const App = () => {
  const showToast = () => {
    CustomToast.show("Hello, this is a custom toast message!", 2000);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Toast" onPress={showToast} />
      <CustomToastWrapper />
    </View>
  );
};

export default App;
```

### 3. Display Toast Messages

Use the `CustomToast.show()` method to display a toast message anywhere in your app.

```tsx
CustomToast.show("Your message goes here!", 3000); // 3000ms is default duration
```

To hide the toast manually (Toasts hide automatically after specified duration or by default 3000ms i.e., 3s):

```tsx
CustomToast.hide();
```

---

## API

### `CustomToast.show(message: string, duration: number = 3000)`

- **message**: The content of your toast message (string).
- **duration**: How long the toast stays visible, in milliseconds (default is 3000 ms).

### `CustomToast.hide()`

- Hides the current toast message.

### `CustomToastWrapper`

- A wrapper component to be included in your component tree to manage toasts. It must be placed near the root component of your app (e.g., inside `<App />`).

#### `CustomToastWrapper` component is only needed to be used once in the main file of your project, after that you can use `CustomToast` anywhere by importing `CustomToast` component

## Customization

#### The options to customize style or apply theme to Toasts will be added in future releases

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-xyz`).
5. Create a new Pull Request.

---

## License

MIT License. See the LICENSE file for more details.

---

## Related Links

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
