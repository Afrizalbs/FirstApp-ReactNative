import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.messageWrapper}>
        <Image source={{uri: props.gambar}} style={styles.iconMessage} />
      </View>
      <Text style={styles.text}>{props.caption}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal>
          <Story
            gambar="https://cdn.pixabay.com/photo/2017/05/29/07/44/cat-2353131_1280.jpg"
            caption="kucing"
          />
          <Story
            gambar="https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg"
            caption="Anjing"
          />
          <Story
            gambar="https://cdn.pixabay.com/photo/2018/10/12/10/30/piglet-3741877_1280.jpg"
            caption="Babi"
          />
          <Story
            gambar="https://scontent.fsrg2-1.fna.fbcdn.net/v/t31.0-8/p960x960/17015929_1171642426268005_4962413073314303270_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_eui2=AeEUGqUyOA2MqaBqtp0FsnC7InNnogghj4cic2eiCCGPh8C7Dnn5kMQfwQePJ5xcUbOr2hsEwBXWV0pgLca1Rp-M&_nc_ohc=AxTzOVQkuesAX9mqTXF&_nc_ht=scontent.fsrg2-1.fna&_nc_tp=6&oh=ceb7b1cbe6670d491c2a8faff00fe607&oe=5F2FE140"
            caption="Wahid"
          />
          <Story
            gambar="https://cdn.pixabay.com/photo/2012/10/10/05/07/grass-snake-60546_1280.jpg"
            caption="Ular"
          />
          <Story
            gambar="https://cdn.pixabay.com/photo/2017/05/29/07/44/cat-2353131_1280.jpg"
            caption="kucing Garong"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  wrapper: {padding: 10, alignItems: 'center'},
  messageWrapper: {
    borderWidth: 4,
    borderColor: '#8e44ad',
    width: 95,
    height: 95,
    borderRadius: 95 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconMessage: {width: 80, height: 80, borderRadius: 80 / 2},
  text: {fontSize: 20, fontWeight: '400', color: '#2d3436', marginTop: 8},
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
