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

let users = []


export default function HomeScreen() {
<<<<<<< HEAD
  setCustomText(customTextProps);
=======
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
>>>>>>> 3da906643d58ea8a05e7b497ad474cc0695470ca
  return (
    <View>
          <SplashCard></SplashCard>
          <Divider></Divider>
          {console.log(user)}
          <Text style={styles.newsText}>{user}</Text>
          <NewsFeed></NewsFeed>
          <LinksCard></LinksCard>
    </View>
  );
}
