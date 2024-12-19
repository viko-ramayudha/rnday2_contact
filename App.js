import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const contacts = [
  { id: '1', name: 'Viko Ryudha', phone: '123-456-7890' },
  { id: '2', name: 'Jhon Tex', phone: '234-567-8901' },
  { id: '3', name: 'Jessica Jane', phone: '345-678-9012' },
  { id: '4', name: 'Shafrina Maulidiah', phone: '456-789-0123' },
  { id: '5', name: 'Anna B.', phone: '567-890-1234' },
];


const getInitials = (name) => {
  const initials = name.split(' ').map((word) => word.charAt(0)).join('');
  return initials.substring(0, 2).toUpperCase();
};

const ContactItem = ({ name, phone }) => (
  <View style={styles.contactItem}>
    <View style={styles.profileCircle}>
      <Text style={styles.initials}>{getInitials(name)}</Text>
    </View>
    <View style={styles.contactDetails}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactPhone}>{phone}</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Contact</Text>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactItem name={item.name} phone={item.phone} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    margin: 10,
    fontSize: 27,
    fontWeight: "bold",
    color: "black",
    marginLeft: 20,
  },
  contactItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  contactDetails: {
    marginLeft: 16,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 16,
  },
});

export default App;