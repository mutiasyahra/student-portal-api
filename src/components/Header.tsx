import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import colors from '../theme/color';

type Props = { title?: string; subtitle?: string };

export default function Header({
  title = 'Hi Jhon 👋',
  subtitle = 'Where to next?',
}: Props) {
  return (
    <ImageBackground
      source={require('../assets/images/bali.jpeg')}
      style={styles.container}
      imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
    padding: 20,
  },
  inner: { backgroundColor: 'rgba(0,0,0,0.25)', padding: 10, borderRadius: 12 },
  title: { color: '#fff', fontSize: 20, fontWeight: '700' },
  subtitle: { color: '#fff', marginTop: 6 },
});
