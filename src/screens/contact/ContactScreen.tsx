import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./ContactScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface ContactScreenProps {}

const ContactScreen: React.FC<ContactScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Contact Us
      </Text>
    </View>
  );
};

export default ContactScreen;
