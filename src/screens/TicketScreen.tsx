import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../theme/color';

const dummyTickets = [
  { id: 't1', title: 'Flight to Bali', date: '2025-11-03', price: 120 },
  { id: 't2', title: 'Komodo Tour', date: '2025-12-01', price: 150 },
];

export default function TicketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Tickets</Text>
      <FlatList
        data={dummyTickets}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontWeight: '700' }}>{item.title}</Text>
            <Text style={{ color: colors.subText }}>{item.date}</Text>
            <Text
              style={{ color: colors.primary, fontWeight: '700', marginTop: 8 }}
            >
              ${item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: colors.background },
  title: { fontSize: 18, fontWeight: '800', marginBottom: 12 },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
});
