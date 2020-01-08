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


const styles = StyleSheet.create({
  newsText: {
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: 20
  }
})
export default function HomeScreen() {
  return (
    <View>
          <SplashCard></SplashCard>
          <Divider></Divider>
          <Text style={styles.newsText}>News Feed</Text>
          <NewsFeed></NewsFeed>
    </View>
  );
}
