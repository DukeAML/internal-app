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
import fire from './../fire';
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

let users = []


export default function HomeScreen() {
  var database = fire.firestore();
  var userRef = database.collection('users');
  let user = 'hi';
  let u = userRef.where('first', '==', 'Luke').get().then(
    snapshot => {
      if(snapshot.empty){
        console.log('No Match');
        return;
      }
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        user = doc.data()['first'];
      });
      
    }
  )
  .catch(
    err=>{
      console.log('Error getting Luke ', err);
    }
  );
  return (
    <View>
          <SplashCard></SplashCard>
          <Divider></Divider>
          {console.log(user)}
          <Text style={styles.newsText}>{user}</Text>
          <NewsFeed></NewsFeed>
    </View>
  );
}
