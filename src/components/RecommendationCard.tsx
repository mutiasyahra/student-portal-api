import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/color';
import { Destination } from '../utils/dummyData';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 48 = paddingHorizontal(20) * 2 + gap(8)

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

      {/* Overlay with badges at bottom of image */}
      <View style={styles.overlay}>
        <View style={styles.locationBadge}>
          <Icon name="location" size={10} color="#fff" />
          <Text style={styles.locationText}>{item.country}</Text>
        </View>
        <View style={styles.ratingBadge}>
          <Icon name="star" size={10} color="#FCD34D" />
          <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
        </View>
      </View>

      {/* Footer with title and price */}
      <View style={styles.footer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price.toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
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
    height: cardWidth * 1.1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: cardWidth * 0.85,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 3,
  },
  locationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 3,
  },
  ratingText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  footer: {
    padding: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.text,
    marginBottom: 6,
  },
  price: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});
