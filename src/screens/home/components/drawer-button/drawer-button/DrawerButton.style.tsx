import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  buttonContainer: ViewStyle;
  buttonText: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    buttonContainer: {
      display: "flex",
      height: 50,
      width: "100%",
      paddingLeft: 8,
      paddingTop: 13,
      paddingBottom: 5,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
    },
    buttonText: {
      width: "100%",
      fontSize: 20,
    },
  });
};
