import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/color';

const dummyTickets = [
  {
    id: 't1',
    from: 'Rotterdam',
    to: 'Labuan Bajo',
    fromCode: 'NL',
    toCode: 'IDN',
    date: 'Mon, 23 Jun',
    time: '5:30pm',
    arrivalTime: '3:30am',
    arrivalDate: 'Tue, 24 Jun',
    price: 1700,
  },
  {
    id: 't2',
    from: 'Rotterdam',
    to: 'Labuan Bajo',
    fromCode: 'NL',
    toCode: 'IDN',
    date: 'Mon, 23 Jun',
    time: '5:30pm',
    arrivalTime: '3:30am',
    arrivalDate: 'Tue, 24 Jun',
    price: 1700,
  },
];

export default function TicketScreen({ navigation }: any) {
  const [selectedCountry, setSelectedCountry] = useState('Netherlands');
  const [selectedDate, setSelectedDate] = useState('23');

  const dates = [
    { day: 'S', date: '22' },
    { day: 'M', date: '23' },
    { day: 'T', date: '24' },
    { day: 'W', date: '25' },
    { day: 'T', date: '26' },
    { day: 'F', date: '27' },
    { day: 'S', date: '28' },
  ];

  const tabs = ['Hotel', 'Aircraft', 'Villa', 'Attraction'];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Tickets</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Country Selector */}
      <View style={styles.section}>
        <Text style={styles.label}>Current location</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedCountry}</Text>
          <Icon name="chevron-down" size={20} color={colors.subText} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.tab, tab === 'Aircraft' && styles.tabActive]}
          >
            <Text
              style={[
                styles.tabText,
                tab === 'Aircraft' && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Date Selector */}
      <View style={styles.section}>
        <View style={styles.dateHeader}>
          <Text style={styles.dateMonth}>June, 2025</Text>
          <Icon name="chevron-down" size={16} color={colors.text} />
        </View>
        <View style={styles.dateRow}>
          {dates.map((d, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.dateBox,
                d.date === selectedDate && styles.dateBoxActive,
              ]}
              onPress={() => setSelectedDate(d.date)}
            >
              <Text
                style={[
                  styles.dateDay,
                  d.date === selectedDate && styles.dateDayActive,
                ]}
              >
                {d.day}
              </Text>
              <Text
                style={[
                  styles.dateNum,
                  d.date === selectedDate && styles.dateNumActive,
                ]}
              >
                {d.date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Tickets Found */}
      <Text style={styles.ticketsFound}>4 Tickets Found</Text>

      {/* Ticket List */}
      <FlatList
        data={dummyTickets}
        keyExtractor={i => i.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.ticketCard}>
            {/* Left Side - Departure */}
            <View style={styles.ticketLeft}>
              <View style={styles.ticketSide}>
                <Text style={styles.ticketLabel}>June, 2025</Text>
                <View style={styles.airportRow}>
                  <View style={styles.airportBox}>
                    <Text style={styles.airportCode}>{item.fromCode}</Text>
                    <Text style={styles.airportCity}>{item.from}</Text>
                  </View>
                  <View style={styles.planeIcon}>
                    <Icon name="airplane" size={20} color="#fff" />
                  </View>
                  <View style={styles.airportBox}>
                    <Text style={styles.airportCode}>{item.toCode}</Text>
                    <Text style={styles.airportCity}>{item.to}</Text>
                  </View>
                </View>
                <View style={styles.timeRow}>
                  <View>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.timeDate}>{item.date}</Text>
                  </View>
                  <View style={styles.timeLine} />
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.time}>{item.arrivalTime}</Text>
                    <Text style={styles.timeDate}>{item.arrivalDate}</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Right Side - Price with Dashed Border */}
            <View style={styles.dashedBorder}>
              <View style={styles.ticketRight}>
                <View style={styles.playBtn}>
                  <Icon name="play" size={16} color={colors.primary} />
                </View>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: colors.subText,
    marginBottom: 8,
    marginTop: 16,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 14,
    borderRadius: 12,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: colors.background,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  tabTextActive: {
    color: '#fff',
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  dateMonth: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateBox: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
    minWidth: 48,
  },
  dateBoxActive: {
    backgroundColor: colors.primary,
  },
  dateDay: {
    fontSize: 12,
    color: colors.subText,
    marginBottom: 4,
  },
  dateDayActive: {
    color: '#fff',
  },
  dateNum: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  dateNumActive: {
    color: '#fff',
  },
  ticketsFound: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  ticketCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  ticketLeft: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.primary,
  },
  ticketSide: {
    flex: 1,
  },
  ticketLabel: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 12,
  },
  airportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  airportBox: {
    alignItems: 'center',
  },
  airportCode: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  airportCity: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.8)',
  },
  planeIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 2,
  },
  timeDate: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.8)',
  },
  timeLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 12,
  },
  dashedBorder: {
    width: 90,
    backgroundColor: colors.primary,
    borderLeftWidth: 2,
    borderLeftColor: '#fff',
    borderStyle: 'dashed',
  },
  ticketRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  playBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
});
