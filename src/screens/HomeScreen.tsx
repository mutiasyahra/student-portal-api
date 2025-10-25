import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import colors from '../theme/color';
import {
  categories,
  recommendations,
  popular,
  Destination,
} from '../utils/dummyData';
import RecommendationCard from '../components/RecommendationCard';
import DestinationCard from '../components/DestinationCard';

export default function HomeScreen({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  // filteredPopular berubah saat selectedCategory / query berubah
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.searchWrap}>
          <TextInput
            placeholder="Search destination"
            style={styles.search}
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={it => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              const isActive = selectedCategory === item.key;
              return (
                <TouchableOpacity
                  style={[
                    styles.catBtn,
                    { backgroundColor: isActive ? colors.primary : '#fff' },
                  ]}
                  onPress={() =>
                    setSelectedCategory(s => (s === item.key ? null : item.key))
                  }
                >
                  {/* using same icon for all categories (replace if you have unique icons) */}
                  <Text
                    style={{
                      color: isActive ? '#fff' : colors.text,
                      fontWeight: '700',
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
            contentContainerStyle={{ paddingVertical: 12 }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            data={recommendations}
            keyExtractor={i => i.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <RecommendationCard
                item={item}
                onPress={() => navigation.navigate('Detail', { item })}
              />
            )}
            contentContainerStyle={{ paddingLeft: 16, paddingVertical: 12 }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <View style={styles.grid}>
            {filteredPopular.map((p: Destination) => (
              <DestinationCard
                key={p.id}
                item={p}
                onPress={() => navigation.navigate('Detail', { item: p })}
              />
            ))}
            {filteredPopular.length === 0 && (
              <View style={{ padding: 16 }}>
                <Text style={{ color: colors.subText }}>
                  No destinations found.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  searchWrap: { paddingHorizontal: 16, marginTop: -24 },
  search: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 46,
    elevation: 3,
  },
  section: { marginTop: 18 },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 16,
    marginBottom: 8,
    color: colors.text,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  catBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: '#E5E7EB',
  },
});
