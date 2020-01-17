import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';
import {Divider} from 'react-native-elements'
import { MonoText } from '../components/StyledText';
import SplashCard from '../components/home/SplashCard';
import NewsFeed from '../components/home/NewsFeed';
import { setCustomText } from 'react-native-global-props';
import {customTextProps} from '../constants/Layout';
import LinksCard from '../components/home/LinksCard'



const styles = StyleSheet.create({
  newsText: {
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    fontFamily: "Avenir",
    backgroundColor: "black",
    color: "white"

  }
})
export default function HomeScreen() {
  setCustomText(customTextProps);
  return (
    <View>
          <SplashCard></SplashCard>
          <Divider></Divider>
          <Text style={styles.newsText}>News Feed</Text>
          <NewsFeed></NewsFeed>
          <LinksCard></LinksCard>
    </View>
  );
}
