import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const Produk = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Katalog Produk</Text>
      <View style={styles.wrapperProduk}>
        <Image source={macbook} style={styles.gambarProduk} />
        <Text style={styles.judulProduk}>New Macbook Pro 2019</Text>
        <Text style={styles.hargaProduk}>Rp.15.000.000</Text>
        <Text style={styles.lokasiProduk}>Kota Semarang</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.btnBeli}>
            <Text style={styles.btnText}>Beli Sekarang</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  wrapperProduk: {
    backgroundColor: '#ced6e0',
    padding: 12,
    width: 325,
    borderRadius: 8,
  },
  gambarProduk: {width: 300, height: 200, borderRadius: 8},
  judulProduk: {fontSize: 20, marginVertical: 10, fontWeight: 'bold'},
  hargaProduk: {fontSize: 17, fontWeight: '800', color: '#1e90ff'},
  lokasiProduk: {fontSize: 15, fontWeight: '900', marginVertical: 8},
  btnBeli: {
    backgroundColor: '#2ed573',
    paddingVertical: 6,
    borderRadius: 30,
    marginVertical: 6,
  },
  btnText: {color: '#fff', fontSize: 20, textAlign: 'center'},
  Text: {
    fontSize: 30,
    fontFamily: 'arial',
    fontWeight: '500',
    margin: 40,
    color: '#ffa502',
    textAlign: 'center',
  },
});

export default Produk;
