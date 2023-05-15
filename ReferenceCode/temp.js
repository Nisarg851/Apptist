import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, DatePickerIOS } from 'react-native';

const Temp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setBirthDate(date);
  };

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
          placeholder="Enter your first name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
          placeholder="Enter your last name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Birth Date:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setBirthDate}
          value={birthDate}
          placeholder="Enter your last name"
        />

      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  inputLabel: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  datePickerText: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  datePicker: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Temp;
