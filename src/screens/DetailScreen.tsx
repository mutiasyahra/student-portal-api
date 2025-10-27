import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/color';

export default function DetailScreen({ route, navigation }: any) {
  const {
    id,
    title,
    country,
    imageUrl,
    rating,
    price,
    description,
    coordinates,
  } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image source={imageUrl} style={styles.image} />

      {/* Header Buttons */}
      <View style={styles.headerButtons}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.weatherBtn}>
          <Icon name="partly-sunny-outline" size={18} color={colors.text} />
          <Text style={styles.weatherText}>24° C</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <View style={styles.ratingBadge}>
            <Icon name="star" size={14} color="#FCD34D" />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {description ||
              `Explore the beautiful ${title} and experience unforgettable moments with stunning views and local culture.`}
          </Text>
        </View>

        {/* Country Badge */}
        <View style={styles.countryBadge}>
          <Icon name="location" size={16} color={colors.primary} />
          <Text style={styles.country}>{country}</Text>
        </View>

        {/* Coordinates (if available) */}
        {coordinates && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location Coordinates</Text>
            <View style={styles.coordinatesBox}>
              <View style={styles.coordItem}>
                <Text style={styles.coordLabel}>Latitude</Text>
                <Text style={styles.coordValue}>{coordinates.lat}</Text>
              </View>
              <View style={styles.coordItem}>
                <Text style={styles.coordLabel}>Longitude</Text>
                <Text style={styles.coordValue}>{coordinates.lng}</Text>
              </View>
            </View>
          </View>
        )}

        {/* Price Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Information</Text>
          <View style={styles.priceBox}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price per person</Text>
              <Text style={styles.priceValue}>${price.toLocaleString()}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Rating</Text>
              <View style={styles.ratingRow}>
                <Icon name="star" size={16} color="#FCD34D" />
                <Text style={styles.priceValue}>{rating.toFixed(1)}/5.0</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About {title}</Text>
          <Text style={styles.description}>
            {description ||
              `${title} is a stunning destination located in ${country}. Experience breathtaking views, rich culture, and unforgettable adventures. Perfect for travelers seeking both relaxation and excitement.`}
          </Text>
        </View>

        {/* Recommendation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What to Expect</Text>
          <View style={styles.featureBox}>
            <View style={styles.featureItem}>
              <Icon name="time-outline" size={24} color={colors.primary} />
              <Text style={styles.featureText}>Flexible Duration</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="people-outline" size={24} color={colors.primary} />
              <Text style={styles.featureText}>Group Friendly</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="camera-outline" size={24} color={colors.primary} />
              <Text style={styles.featureText}>Photo Spots</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon
                name="restaurant-outline"
                size={24}
                color={colors.primary}
              />
              <Text style={styles.featureText}>Local Cuisine</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate('Root', { screen: 'Tickets' })}
        >
          <Text style={styles.bookBtnText}>
            Book Now - ${price.toLocaleString()}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 340,
  },
  headerButtons: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  weatherText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
  },
  titleSection: {
    paddingHorizontal: 20,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: colors.subText,
    lineHeight: 22,
  },
  countryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
    marginHorizontal: 20,
    marginTop: 16,
  },
  country: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  coordinatesBox: {
    flexDirection: 'row',
    gap: 12,
  },
  coordItem: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
  },
  coordLabel: {
    fontSize: 12,
    color: colors.subText,
    marginBottom: 4,
  },
  coordValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  priceBox: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    color: colors.subText,
  },
  priceValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
  },
  featureBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  featureItem: {
    width: '48%',
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },
  bookBtn: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 32,
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
