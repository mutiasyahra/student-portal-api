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
import colors from '../theme/color';

export default function DetailScreen({ route, navigation }: any) {
  const item = route.params?.item;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image source={item.image} style={styles.image} />

      {/* Header Buttons */}
      <View style={styles.headerButtons}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.weatherBtn}>
          <Text style={styles.weatherIcon}>☁️</Text>
          <Text style={styles.weatherText}>24° C</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingIcon}>⭐</Text>
            <Text style={styles.ratingText}>{item.rating || '5.0'}</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>
            From classical music and worship to breathtaking cruises, Labuan
            Bajo is ratings belong Indonesia as one with nature days of island
            exploration.
          </Text>
        </View>

        {/* Country Badge */}
        <View style={styles.countryBadge}>
          <Text style={styles.flag}>🇮🇩</Text>
          <Text style={styles.country}>Indonesia</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Discover the Beauty of Labuan Bajo
          </Text>
          <View style={styles.author}>
            <Text style={styles.authorText}>👤 by RB Zestay</Text>
          </View>
          <Text style={styles.description}>
            Wow amazing the experience in my life very very worth it like it!
            Very price very well
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Recommendation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommendation in Bajo</Text>
          <View style={styles.recommendCard}>
            <Image
              source={require('../assets/images/dest1.jpg')}
              style={styles.recommendImage}
            />
            <View style={styles.recommendInfo}>
              <Text style={styles.recommendTitle}>
                Pinisi Luxury Private Trip
              </Text>
              <Text style={styles.recommendDesc}>Some friendly pick-up</Text>
              <View style={styles.recommendFooter}>
                <View style={styles.quantity}>
                  <TouchableOpacity style={styles.qtyBtn}>
                    <Text>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>1</Text>
                  <TouchableOpacity style={styles.qtyBtn}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.totalLabel}>Total Amount</Text>
                  <Text style={styles.totalPrice}>$10.000</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate('Root', { screen: 'Ticket' })}
        >
          <Text style={styles.bookBtnText}>Book Now</Text>
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
  backIcon: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
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
  weatherIcon: {
    fontSize: 16,
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
  ratingIcon: {
    fontSize: 14,
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
    fontSize: 13,
    color: colors.subText,
    lineHeight: 20,
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
  flag: {
    fontSize: 20,
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
  author: {
    marginBottom: 8,
  },
  authorText: {
    fontSize: 13,
    color: colors.subText,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 8,
  },
  viewAll: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  recommendCard: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 12,
    gap: 12,
  },
  recommendImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  recommendInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  recommendTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  recommendDesc: {
    fontSize: 12,
    color: colors.subText,
    marginTop: 4,
  },
  recommendFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 4,
    paddingVertical: 4,
    gap: 8,
  },
  qtyBtn: {
    width: 24,
    height: 24,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    paddingHorizontal: 8,
  },
  totalLabel: {
    fontSize: 10,
    color: colors.subText,
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  bookBtn: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 32,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
