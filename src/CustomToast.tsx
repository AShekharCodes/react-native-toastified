import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
} from "react";
import { Animated, Text, StyleSheet } from "react-native";

// Internal type
export type CustomToastRef = {
  show: (message: string, duration?: number) => void;
  hide: () => void;
};

const Toast = forwardRef<CustomToastRef>((_, ref) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState("");
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useImperativeHandle(ref, () => ({
    show: (msg: string, duration = 3000) => {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }

      // Hide the current toast instantly if it's visible
      Animated.timing(opacity, {
        toValue: 0,
        duration: 0, // Instant hide
        useNativeDriver: true,
      }).start(() => {
        // Set new message
        setMessage(msg);

        // Fade in
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          // Set new timeout
          const id = setTimeout(() => {
            hide();
          }, duration);

          setTimeoutId(id);
        });
      });
    },
    hide: () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }

      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    },
  }));

  const hide = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.toast, { opacity }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
});

const toastRef = React.createRef<CustomToastRef>();

// The toast wrapper component to be mounted in your root layout
export const CustomToastWrapper = () => {
  return <Toast ref={toastRef} />;
};

// Actual API to call
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
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
