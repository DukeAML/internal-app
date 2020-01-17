import React, { Component } from 'react'
import { Card, Icon, Divider } from 'react-native-elements'
import {
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import ProfileHeader from '../components/profile/ProfileHeader'
import Email from '../components/profile/Email'
import Phone from '../components/profile/Phone'
import ProfileProjects from '../components/profile/ProfileProjects'
import { Separator } from 'native-base'

import { setCustomText } from 'react-native-global-props';
import {customTextProps} from '../constants/Layout';

const images = {
    varun_nair: require('../assets/images/profile_pics/varun_nair.jpeg'),
    luke_truitt: require('../assets/images/profile_pics/luke_truitt.jpeg'),
    daniel_tao: require('../assets/images/profile_pics/daniel_tao.jpeg'),
    mary_gooneratne: require('../assets/images/profile_pics/mary_gooneratne.jpeg'),
    header: require('../assets/images/header.jpg')
};

const info = {
    name: "Daniel Tao",
    team: "Data Science",
    role: "Machine Learning Engineer",
    contact_info: {
      phone: "(919) 884-1590",
      email: "chaofan.tao@duke.edu",
      linked_in: "https://www.linkedin.com/in/chaofan-daniel-tao/",
      major: "B.S. Computer Science (2021)",
      location: "Shanghai, China"
    },
    projects: ["VR Sickness Prediction"]
  }

  export default class ProfileScreen extends Component {

    onPressTel = number => {
      Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err))
    }
  
    onPressSms = () => {
      console.log('sms')
    }
  
    onPressEmail = email => {
      Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
        console.log('Error:', err)
      )
    }
  
    render() {
      setCustomText(customTextProps);
      return (
          <View style={styles.container}>
              <ProfileHeader name={info.name} team={info.team} role={info.role} />
              <Phone
              key={'phone'}
              index={0}
              name={info.name}
              number={info.contact_info.phone}
              onPressSms={this.onPressSms}
              onPressTel={this.onPressTel}
            />
              <Email
              key={'email'}
              index={0}
              name={info.name}
              email={info.contact_info.email}
              onPressEmail={this.onPressEmail}
            />
            <Divider/>
            <Text style={[styles.titleText, styles.profileText]}> My Projects </Text>
            <ProfileProjects projects={info.projects}></ProfileProjects>
          </View>
      )
    }
  }

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
  },
  profileText: {
    padding: 10,
    fontFamily: "Avenir"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  scroll: {
    backgroundColor: '#FFF',
  },
})

