# react-native-toastified

A lightweight, Android-styled, toast component for React Native with simple-to-use methods and cross-platform support.

---

## Features

- **Cross-platform** support for both iOS and Android.
- **Easy-to-use** API for showing and hiding toast messages.
- Customizable **animations** for smooth, non-intrusive notifications.
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

To hide the toast manually:

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

---

## Customization

You can customize the toast message’s appearance by modifying the styles in the `CustomToast.tsx` file.

The default toast is styled as follows:

```tsx
const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    backgroundColor: "#444",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    zIndex: 999,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
```

Feel free to override these styles as needed.

---

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
