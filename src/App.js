import React from 'react';
import StylingComponent from './pages/StylingComponent';
import MainComponent from './pages/MainComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import {View, ScrollView} from 'react-native';

const App = () => {
  return (
    <View>
      <ScrollView>
        <MainComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
