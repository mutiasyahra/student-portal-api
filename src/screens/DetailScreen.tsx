import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../theme/color';

export default function DetailScreen({ route, navigation }: any) {
  const item = route.params?.item;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={{ fontWeight: '700' }}>{'<'}</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content}>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.loc}>{item.location}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={{ color: colors.subText }}>{item.days}</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}
        >
          <Text style={{ color: colors.primary, fontWeight: '700' }}>
            ★ {item.rating}
          </Text>
          <Text style={{ marginLeft: 8, color: colors.subText }}>
            • 300 reviews
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>
          {item.title} adalah destinasi unggulan dengan pemandangan indah dan
          pengalaman tak terlupakan. Nikmati aktivitas lokal, pemandangan, dan
          itinerary yang disusun khusus.
        </Text>

        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate('Root', { screen: 'Ticket' })}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 260 },
  back: {
    position: 'absolute',
    top: 40,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 12,
    elevation: 3,
  },
  content: { padding: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 20, fontWeight: '800' },
  loc: { color: '#6B7280', marginTop: 6 },
  price: { color: colors.primary, fontWeight: '800', fontSize: 18 },
  sectionTitle: { marginTop: 16, fontWeight: '700' },
  desc: { color: '#6B7280', marginTop: 6, lineHeight: 20 },
  bookBtn: {
    marginTop: 20,
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
});
