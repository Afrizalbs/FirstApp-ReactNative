import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.text}>{number}</Text>
      <Button title="tambah" onPress={() => setNumber(number + 1)} />
      <View style={{height: 10}} />
      <Button title="kurangi" onPress={() => setNumber(number - 1)} />
    </View>
  );
};

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Belajar State Dinamis</Text>
      <Counter />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  title: {fontSize: 30, textAlign: 'center'},
  text: {fontSize: 40, fontWeight: 'bold'},
});
