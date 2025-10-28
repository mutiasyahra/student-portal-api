import React, { useState } from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/color';
import { destinations } from '../utils/dummyData';
import DestinationCard from '../components/DestinationCard';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Icon name="options-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Popular Destination Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Destination</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={destinations}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <DestinationCard
                id={item.id}
                title={item.title}
                country={item.country}
                imageUrl={item.imageUrl}
                rating={item.rating}
                price={item.price}
                description={item.description}
                coordinates={item.coordinates}
                onPress={() =>
                  navigation.navigate('Detail', {
                    id: item.id,
                    title: item.title,
                    country: item.country,
                    imageUrl: item.imageUrl,
                    rating: item.rating,
                    price: item.price,
                    description: item.description,
                    coordinates: item.coordinates,
                  })
                }
              />
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
});
