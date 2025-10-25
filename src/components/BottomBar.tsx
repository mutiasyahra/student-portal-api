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
            <View
              style={[
                styles.iconWrapper,
                isFocused && styles.iconWrapperActive,
              ]}
            >
              <Image source={icons[route.name]} style={styles.icon} />
            </View>
          </TouchableOpacity>
        );
      })}

      {/* Tambahan Profile Icon */}
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../assets/icons/ic_profile.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapperActive: {
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  icon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    tintColor: '#9CA3AF',
  },
});
