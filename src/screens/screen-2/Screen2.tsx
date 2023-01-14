import React, { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import createStyles from "./Screen2.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface Screen2Props {}

const Screen2: React.FC<Screen2Props> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Screen 2
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}
      >
        <Text color={colors.white}>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
