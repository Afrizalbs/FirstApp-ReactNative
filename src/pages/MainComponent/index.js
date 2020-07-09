import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const MainComponent = () => {
  return (
    <View>
      <View style={{width: 100, height: 100, backgroundColor: 'lightblue'}} />
      <Text>My First App</Text>
      <Home />
      <Photo />
      <TextInput
        style={{
          width: 300,
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 50,
        }}
      />
    </View>
  );
};

const Home = () => {
  return <Text>Afrizal Bagas</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/people'}}
      style={{width: 300, height: 150}}
    />
  );
};

export default MainComponent;
