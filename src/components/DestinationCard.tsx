import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/color';

const { width, height } = Dimensions.get('window');

export type DestinationCardProps = {
  id: string;
  title: string;
  country: string;
  imageUrl: ImageSourcePropType;
  rating: number;
  price: number;
  description?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  onPress?: () => void;
};

export default function DestinationCard({
  id,
  title,
  country,
  imageUrl,
  rating,
  price,
  description,
  coordinates,
  onPress,
}: DestinationCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = (e: any) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <Image source={imageUrl} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <TouchableOpacity
          style={styles.favoriteBtn}
          onPress={handleFavoritePress}
          activeOpacity={0.7}
        >
          <Icon
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={width * 0.05}
            color={isFavorite ? colors.primary : '#6B7280'}
          />
        </TouchableOpacity>
        <View style={styles.cardFooter}>
          <View style={styles.locationBadge}>
            <Icon name="location" size={14} color="#fff" />
            <Text style={styles.locationText}>{country}</Text>
          </View>
          <View style={styles.ratingBadge}>
            <Icon name="star" size={14} color="#FCD34D" />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.cardPrice}>${price.toLocaleString()}/pax</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: height * 0.4,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: width * 0.04,
    justifyContent: 'space-between',
  },
  favoriteBtn: {
    position: 'absolute',
    top: width * 0.04,
    right: width * 0.04,
    width: width * 0.1,
    height: width * 0.1,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 12,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  locationText: {
    color: '#fff',
    fontSize: width * 0.03,
    fontWeight: '600',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: width * 0.03,
    fontWeight: '700',
  },
  cardInfo: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 14,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: width * 0.045,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: width * 0.038,
    fontWeight: '600',
    color: '#fff',
  },
});
