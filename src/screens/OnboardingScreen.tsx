import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import colors from '../theme/color';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require('../assets/images/onboarding-bg.jpg')}
      style={styles.bg}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Your Next Adventure{'\n'}Starts Here</Text>
          <Text style={styles.sub}>
            Life's too short to stay in one place. Find your next favorite{'\n'}
            city, hidden mountain, and let's explore together.
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.replace('Root')}
          >
            <Text style={styles.btnText}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  content: {
    paddingHorizontal: 28,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 40,
  },
  sub: {
    color: '#fff',
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.9,
  },
  btn: {
    marginTop: 32,
    backgroundColor: '#00D9D5',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  btnText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
});
