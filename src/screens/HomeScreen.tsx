import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/color';
import { destinationApi, Destination } from '../services/api';
import DestinationCard from '../components/DestinationCard';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  const [query, setQuery] = useState('');
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<
    Destination[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch destinations from API
  const fetchDestinations = useCallback(async () => {
    try {
      setError(null);
      const data = await destinationApi.getAll();
      setDestinations(data);
      setFilteredDestinations(data);
    } catch (err) {
      console.error('Failed to fetch destinations:', err);
      setError('Failed to load destinations. Please try again.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  // Search filter
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredDestinations(destinations);
    } else {
      const filtered = destinations.filter(
        dest =>
          dest.title.toLowerCase().includes(query.toLowerCase()) ||
          dest.country.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredDestinations(filtered);
    }
  }, [query, destinations]);

  // Pull to refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchDestinations();
  }, [fetchDestinations]);

  // Retry on error
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchDestinations();
  };

  // Loading state
  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading destinations...</Text>
      </View>
    );
  }

  // Error state
  if (error && !refreshing) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <Icon name="cloud-offline-outline" size={64} color={colors.subText} />
        <Text style={styles.errorTitle}>Oops!</Text>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryBtn} onPress={handleRetry}>
          <Icon name="refresh" size={20} color="#fff" />
          <Text style={styles.retryBtnText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Icon name="navigate-outline" size={20} color="#0EA5E9" />
            </View>
            <Text style={styles.greeting}>Hi, Haikal</Text>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <View style={styles.notifDot} />
            <Icon name="notifications-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* CTA Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Plan Your{'\n'}Summer!</Text>
            <TouchableOpacity style={styles.bannerArrow}>
              <Icon name="arrow-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchWrap}>
          <View style={styles.searchContainer}>
            <Icon name="search-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search destination..."
              placeholderTextColor="#9CA3AF"
              style={styles.search}
              value={query}
              onChangeText={setQuery}
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={() => setQuery('')}>
                <Icon name="close-circle" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Icon name="options-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Results Count */}
        {query.length > 0 && (
          <View style={styles.resultsInfo}>
            <Text style={styles.resultsText}>
              Found {filteredDestinations.length} destination
              {filteredDestinations.length !== 1 ? 's' : ''}
            </Text>
          </View>
        )}

        {/* Popular Destination Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {query.length > 0 ? 'Search Results' : 'Popular Destination'}
            </Text>
            {query.length === 0 && (
              <TouchableOpacity>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            )}
          </View>

          {filteredDestinations.length === 0 ? (
            <View style={styles.emptyState}>
              <Icon name="search-outline" size={48} color={colors.subText} />
              <Text style={styles.emptyTitle}>No destinations found</Text>
              <Text style={styles.emptyText}>
                Try searching with different keywords
              </Text>
            </View>
          ) : (
            <FlatList
              data={filteredDestinations}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <DestinationCard
                  id={item.id}
                  title={item.title}
                  country={item.country}
                  imageUrl={{ uri: item.imageUrl }}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  coordinates={{
                    lat: item.latitude,
                    lng: item.longitude,
                  }}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: item.id,
                      title: item.title,
                      country: item.country,
                      imageUrl: { uri: item.imageUrl },
                      rating: item.rating,
                      price: item.price,
                      description: item.description,
                      coordinates: {
                        lat: item.latitude,
                        lng: item.longitude,
                      },
                    })
                  }
                />
              )}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            />
          )}
        </View>

        {/* API Status Indicator */}
        <View style={styles.apiStatus}>
          <View style={styles.apiDot} />
          <Text style={styles.apiText}>
            Connected to API • {destinations.length} destinations loaded
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
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
  greeting: {
    fontSize: width * 0.05,
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
    fontSize: width * 0.08,
    fontWeight: '700',
    color: '#fff',
    lineHeight: width * 0.095,
  },
  bannerArrow: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchWrap: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
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
  search: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0,
  },
  filterBtn: {
    width: 52,
    height: 52,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsInfo: {
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  resultsText: {
    fontSize: 14,
    color: colors.subText,
    fontWeight: '500',
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
    fontSize: width * 0.045,
    color: colors.text,
  },
  viewAll: {
    color: colors.primary,
    fontSize: width * 0.035,
    fontWeight: '600',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.subText,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 14,
    color: colors.subText,
    textAlign: 'center',
    marginBottom: 24,
  },
  retryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  retryBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: colors.subText,
    textAlign: 'center',
  },
  apiStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  apiDot: {
    width: 8,
    height: 8,
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  apiText: {
    fontSize: 12,
    color: colors.subText,
  },
});
