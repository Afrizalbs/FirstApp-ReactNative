import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        {/* <View
          style={{
            backgroundColor: '#f7f1e3',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{backgroundColor: '#cd84f1', width: 50, height: 50}} />
          <View style={{backgroundColor: '#ffcccc', width: 50, height: 50}} />
          <View style={{backgroundColor: '#ff4d4d', width: 50, height: 50}} />
          <View style={{backgroundColor: '#ffaf40', width: 50, height: 50}} />
        </View>
        <View style={{height: 20}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#34ace0',
            height: 40,
            alignItems: 'center',
          }}>
          <Text>Beranda</Text>
          <Text>Pemesanan </Text>
          <Text>Pembayaran</Text>
          <Text>Tentang</Text>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#16202a',
            paddingVertical: 8,
            paddingHorizontal: 10,
          }}>
          <Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1261933876261212160/54-JA3dq_400x400.jpg',
              width: 140,
              height: 140,
            }}
            style={{borderRadius: 140 / 2}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
              Afrizal Bagas
            </Text>
            <Text style={{color: '#d1ccc0', fontSize: 25}}>@afrzlbgss</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#d1ccc0', fontSize: 20}}>200 Follower</Text>
              <Text style={{color: '#d1ccc0', fontSize: 20, marginLeft: 10}}>
                100 Following
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
