import { ViewStyle, StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
  homeContainer: ViewStyle;
  drawerContainer: ViewStyle;
  drawerMenu: ViewStyle;
  drawerHeader: ViewStyle;
  separator: ViewStyle;
  navBar: ViewStyle;
  navBarText: ViewStyle;
  iconContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    drawerContainer: {
      flex: 1,
      backgroundColor: colors.black,
      borderTopLeftRadius: 50,
    },
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: 50,
      width: "40%",
      marginLeft: 10,
      paddingLeft: 10,
    },
    drawerMenu: {
      marginTop: 30,
      width: 100,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    drawerHeader: {
      fontSize: 20,
      fontWeight: "900",
      color: colors.white,
      width: "70",
    },
    separator: {
      width: "100%",
      height: 0.2,
      backgroundColor: colors.white,
      marginTop: 50,
      marginBottom: 50,
    },
    homeContainer: {
      flex: 1,
      backgroundColor: "white",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderTopLeftRadius: 50,
    },
    navBar: {
      flexDirection: "row",
      marginTop: 35,
      alignItems: "center",
      opacity: 0.3,
    },
    iconContainer: {
      marginLeft: 10,
    },
    navBarText: {
      marginLeft: 15,
      fontSize: 19,
      letterSpacing: 4,
    },
  });
};
