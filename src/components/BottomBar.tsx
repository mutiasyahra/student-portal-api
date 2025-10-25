import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../theme/color';

export default function BottomBar({ state, descriptors, navigation }: any) {
  const icons: any = {
    Home: require('../assets/icons/ic_home.png'),
    Ticket: require('../assets/icons/ic_ticket.png'),
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name);
        };
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.btn}
            activeOpacity={0.8}
          >
            <Image
              source={icons[route.name]}
              style={[
                styles.icon,
                { tintColor: isFocused ? colors.primary : '#9CA3AF' },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 8,
    paddingHorizontal: 12,
  },
  btn: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icon: { width: 26, height: 26, resizeMode: 'contain' },
});
