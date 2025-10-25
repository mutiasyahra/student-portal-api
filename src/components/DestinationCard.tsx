import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/color';
import { Destination } from '../utils/dummyData';

export default function DestinationCard({
  item,
  onPress,
}: {
  item: Destination;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.loc}>{item.location}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  image: { width: '100%', height: 110 },
  info: { padding: 10 },
  title: { fontWeight: '700', color: colors.text },
  loc: { color: colors.subText, fontSize: 12, marginTop: 6 },
  price: { color: colors.primary, marginTop: 8, fontWeight: '700' },
});
