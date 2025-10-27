import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/color';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default function BottomBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const getIconName = (routeName: string, isFocused: boolean) => {
    if (routeName === 'Home') {
      return isFocused ? 'home' : 'home-outline';
    }
    if (routeName === 'Explore') {
      return isFocused ? 'compass' : 'compass-outline';
    }
    if (routeName === 'Profile') {
      return isFocused ? 'person' : 'person-outline';
    }
    return 'ellipse-outline';
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconWrapper,
                isFocused && styles.iconWrapperActive,
              ]}
            >
              <Icon
                name={getIconName(route.name, isFocused)}
                size={26}
                color={isFocused ? colors.primary : '#9CA3AF'}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapperActive: {
    backgroundColor: 'rgba(255, 119, 84, 0.1)',
  },
});
