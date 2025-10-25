import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/color';
import { Destination } from '../utils/dummyData';

export default function RecommendationCard({
  item,
  onPress,
}: {
  item: Destination;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.sub}>
          {item.location} • {item.days}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.badge}>
            <Text style={{ color: '#fff', fontWeight: '700' }}>
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 260,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginRight: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  image: { width: '100%', height: 140 },
  body: { padding: 12 },
  title: { fontWeight: '700', fontSize: 16, color: colors.text },
  sub: { color: colors.subText, marginTop: 6, fontSize: 12 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: { color: colors.primary, fontWeight: '700', fontSize: 16 },
  badge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
