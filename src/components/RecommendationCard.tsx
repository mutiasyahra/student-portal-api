import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
      <Image source={item.imageUrl} style={styles.image} />
      <TouchableOpacity style={styles.favoriteBtn}>
        <Icon name="heart-outline" size={18} color={colors.text} />
      </TouchableOpacity>
      <View style={styles.overlay}>
        <View style={styles.locationBadge}>
          <Icon name="location" size={12} color="#fff" />
          <Text style={styles.locationText}>{item.country}</Text>
        </View>
        <View style={styles.ratingBadge}>
          <Icon name="star" size={12} color="#FCD34D" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toLocaleString()}/pax</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 180,
  },
  favoriteBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingTop: 140,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  locationText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  footer: {
    padding: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.text,
    marginBottom: 4,
  },
  price: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
});
