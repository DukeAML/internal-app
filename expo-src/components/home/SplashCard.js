import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ListItem } from 'react-native'
import { Icon } from 'react-native-elements'
import {Container } from 'native-base'
import PropTypes from 'prop-types'

import NextMeeting from './NextMeeting'
import ProjectsButton from './ProjectsButton'
import ProfileButton from './ProfileButton'
import NewsFeed from './NewsFeed'

const styles = StyleSheet.create({
  leftPanel: {
      flex: 1,
      fontFamily: "Avenir",
  },
    rightPanel: {
    flexDirection: 'column',
    flex: 1,
    padding:20,
    justifyContent: "flex-start",
    fontFamily: "Avenir"
  },
  container: {
      flexDirection: 'row'
  },
  buttonStyle: {
    fontFamily: 'Avenir',
    backgroundColor: "black",
    color: "white"
  }
  
})

export default class SplashCard extends Component {
    render() { return(
        <View>
    <View style={styles.container}>
        <View style={styles.leftPanel}>
        <NextMeeting days="4" type="General Body" location="Social Science 121"></NextMeeting>
        </View>
        <View style={styles.rightPanel}>
        <ProjectsButton style={styles.buttonStyle}></ProjectsButton>
        <ProfileButton style={styles.buttonStyle}></ProfileButton>
        </View>
    </View>
</View>
    );
    }}

