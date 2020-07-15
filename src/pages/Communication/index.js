import React, {useState} from 'react';
import Produk from '../../component/Produk';
import CartBelanja from '../../component/CartBelanja';
import {View} from 'react-native';

const Communication = () => {
  const [totalProduk, setTotalProduk] = useState(0);
  return (
    <View>
      <Produk onButtonPress={() => setTotalProduk(totalProduk + 1)} />
      <CartBelanja Total={totalProduk} />
    </View>
  );
};

export default Communication;
