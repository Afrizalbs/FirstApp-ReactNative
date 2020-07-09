import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const StylingComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.Text}>Hallo Gayysssss</Text>
      <View
        style={{
          backgroundColor: '#ced6e0',
          padding: 12,
          width: 325,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 300, height: 200, borderRadius: 8}}
        />
        <Text style={{fontSize: 20, marginVertical: 10, fontWeight: 'bold'}}>
          New Macbook Pro 2019
        </Text>
        <Text style={{fontSize: 17, fontWeight: '800', color: '#1e90ff'}}>
          Rp.15.000.000
        </Text>
        <Text style={{fontSize: 15, fontWeight: '900', marginVertical: 8}}>
          Kota Semarang
        </Text>
        <View
          style={{
            backgroundColor: '#2ed573',
            paddingVertical: 6,
            borderRadius: 30,
            marginVertical: 6,
          }}>
          <Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
            Beli Sekarang
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    fontFamily: 'arial',
    fontWeight: '500',
    margin: 40,
    color: '#ffa502',
    textAlign: 'center',
  },
});

export default StylingComponent;
