import React, { useState, useRef, useMemo } from "react";
import { View, Animated, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";

import createStyles from "./HomeScreen.style";
import DrawerButton from "./components/drawer-button/drawer-button/DrawerButton";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const rotateBottom = useRef(new Animated.Value(0)).current;
  const moveBottom = useRef(new Animated.Value(0)).current;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const interpolate = rotateBottom.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-12deg"],
  });

  const handleItemPress = () => {
    Animated.timing(moveToRight, {
      toValue: showMenu ? 0 : 230,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotateBottom, {
      toValue: showMenu ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(moveBottom, {
      toValue: showMenu ? 0 : 45,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu);
  };

  return (
    <Animated.View
      style={[
        styles.drawerContainer,
        { transform: [{ translateY: moveBottom }] },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.drawerMenu}>
          <Text style={styles.drawerHeader}>Beka</Text>
        </View>

        <DrawerButton isSelected text="Start" />
        <DrawerButton screen={SCREENS.SCREEN1} text="Your Cart" />
        <DrawerButton screen={SCREENS.SCREEN2} text="Favourites" />
        <DrawerButton text="Your Orders" />

        <View style={styles.separator} />

        <DrawerButton text="Sign Out" />
      </View>
      <Animated.View
        style={[
          styles.homeContainer,
          { transform: [{ translateX: moveToRight }, { rotate: interpolate }] },
        ]}
      >
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleItemPress}
          >
            <Icon
              name="menu"
              type="Ionicons"
              color={colors.iconBlack}
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.navBarText}>START</Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default HomeScreen;
