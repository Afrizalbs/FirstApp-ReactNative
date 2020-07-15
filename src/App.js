import React from 'react';
import StylingComponent from './pages/StylingComponent';
import MainComponent from './pages/MainComponent';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import Position from './pages/Position';
import {View, ScrollView} from 'react-native';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <MainComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        <Communication />
      </ScrollView>
    </View>
  );
};

export default App;
