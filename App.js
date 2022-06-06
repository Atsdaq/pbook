import React from 'react';
import Category from './screens/category';
//import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default props => {
  let [fontsLoaded] = useFonts({
    'Amharic-Bold': require('./assets/fonts/NotoSerifEthiopic-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Category/>
};