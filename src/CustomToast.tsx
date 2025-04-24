import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
} from "react";
import { Animated, Text, StyleSheet } from "react-native";

export type CustomToastRef = {
  show: (message: string, duration?: number) => void;
  hide: () => void;
};

const Toast = forwardRef<CustomToastRef>((_, ref) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(false);

  useImperativeHandle(ref, () => ({
    show: (msg: string, duration = 3000) => {
      if (!isActive) {
        setIsActive(true);
        setMessage(msg);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setTimeout(() => {
            hide();
          }, duration);
        });
      }
    },
    hide,
  }));

  const hide = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setIsActive(false));
  };

  return (
    <Animated.View style={[styles.toast, { opacity }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
});

const toastRef = React.createRef<CustomToastRef>();

export const CustomToastWrapper = () => {
  return <Toast ref={toastRef} />;
};

const CustomToast = {
  show: (message: string, duration?: number) => {
    toastRef.current?.show(message, duration);
  },
  hide: () => {
    toastRef.current?.hide();
  },
};

export default CustomToast;

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
    fontSize: 14,
    textAlign: "center",
  },
});
