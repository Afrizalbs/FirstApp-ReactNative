import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import message from '../../assets/icon/email.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.messageWrapper}>
        <Image source={message} style={styles.iconMessage} />
        <Text style={styles.notif}>20</Text>
      </View>
      <Text style={styles.text}>Pesan Masuk</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {padding: 10, alignItems: 'center'},
  messageWrapper: {
    borderWidth: 2,
    borderColor: '#45aaf2',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconMessage: {width: 65, height: 65},
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
