import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import colors from '../theme/color';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require('../assets/images/onboarding-bg.jpg')}
      style={styles.bg}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Explore the world</Text>
        <Text style={styles.sub}>
          Find the best destinations and plan your trip
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.replace('Root')}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center' },
  overlay: { padding: 28 },
  title: { fontSize: 34, color: '#fff', fontWeight: '800' },
  sub: { color: '#fff', marginTop: 8, fontSize: 16 },
  btn: {
    marginTop: 22,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  btnText: { color: '#fff', fontWeight: '700' },
});
