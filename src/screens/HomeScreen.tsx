import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import colors from '../theme/color';
import {
  categories,
  recommendations,
  popular,
  Destination,
} from '../utils/dummyData';

export default function HomeScreen({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const filteredPopular = useMemo(() => {
    let list = [...popular];
    if (selectedCategory)
      list = list.filter(p => p.category === selectedCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q),
      );
    }
    return list;
  }, [selectedCategory, query]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>⛰️</Text>
            </View>
            <Text style={styles.greeting}>Haikal</Text>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <View style={styles.notifDot} />
            <Text style={styles.notifIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Plan Your{'\n'}Summer!</Text>
            <TouchableOpacity style={styles.bannerArrow}>
              <Text style={styles.arrowText}>→</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchWrap}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              placeholder="Search destination..."
              placeholderTextColor="#9CA3AF"
              style={styles.search}
              value={query}
              onChangeText={setQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <View style={styles.filterLine} />
            <View style={styles.filterLine} />
            <View style={styles.filterLine} />
          </TouchableOpacity>
        </View>

        {/* Popular Destination */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Destination</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={recommendations}
            keyExtractor={i => i.id}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Detail', { item })}
              >
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardOverlay}>
                  <TouchableOpacity style={styles.favoriteBtn}>
                    <Text style={styles.favoriteIcon}>♡</Text>
                  </TouchableOpacity>
                  <View style={styles.cardFooter}>
                    <View style={styles.locationBadge}>
                      <Text style={styles.locationIcon}>📍</Text>
                      <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                    <View style={styles.ratingBadge}>
                      <Text style={styles.ratingIcon}>⭐</Text>
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                  </View>
                  <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardPrice}>
                      ${item.price.toLocaleString()}/pax
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 36,
    height: 36,
    backgroundColor: '#E0F2FE',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  notifBtn: {
    width: 44,
    height: 44,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notifDot: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  notifIcon: {
    fontSize: 20,
  },
  banner: {
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  },
  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 38,
  },
  bannerArrow: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  searchWrap: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    gap: 10,
  },
  searchIcon: {
    fontSize: 18,
  },
  search: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  filterBtn: {
    width: 52,
    height: 52,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  filterLine: {
    width: 20,
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.text,
  },
  viewAll: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  card: {
    width: '100%',
    height: 320,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
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
    padding: 16,
    justifyContent: 'space-between',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  favoriteIcon: {
    fontSize: 20,
    color: '#6B7280',
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
    backgroundColor: 'rgba(31,41,55,0.75)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  locationIcon: {
    fontSize: 12,
  },
  locationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(31,41,55,0.75)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  ratingIcon: {
    fontSize: 12,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  cardInfo: {
    backgroundColor: 'rgba(31,41,55,0.85)',
    padding: 14,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});
