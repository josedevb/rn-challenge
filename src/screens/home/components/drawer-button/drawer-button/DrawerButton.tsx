import React, { useMemo } from "react";
import * as NavigationService from "react-navigation-helpers";
import { TouchableOpacity, Text } from "react-native";
import { useTheme, ExtendedTheme } from "@react-navigation/native";

import createStyles from "./DrawerButton.style";

interface ButtonProps {
  screen?: undefined | string;
  text: string;
  isSelected?: boolean;
}

const DrawerButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const theme = useTheme();
  const { colors }: { colors: ExtendedTheme } = theme;
  const styles = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity
      onPress={() => NavigationService.push(props.screen as string)}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: props.isSelected
            ? colors.darkBlack
            : colors.transparent,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          { color: props.isSelected ? colors.red : colors.white },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
