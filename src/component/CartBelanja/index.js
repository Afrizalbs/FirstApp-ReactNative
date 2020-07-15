import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import cart from '../../assets/icon/cart.png';

const CartBelanja = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.Total}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
};

export default CartBelanja;

const styles = StyleSheet.create({
  wrapper: {padding: 10, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 4,
    borderColor: '#45aaf2',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconCart: {width: 55, height: 55},
  text: {fontSize: 14, fontWeight: '700', color: '#777', marginTop: 8},
  notif: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#26de81',
    width: 23,
    height: 23,
    padding: 3,
    borderRadius: 25,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
