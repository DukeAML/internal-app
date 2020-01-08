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
      flex: 1
  },
    rightPanel: {
    flexDirection: 'column',
    flex: 1,
    padding:20,
    justifyContent: "flex-start"
  },
  container: {
      flexDirection: 'row'
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
        <ProjectsButton></ProjectsButton>
        <ProfileButton></ProfileButton>
        </View>
    </View>
</View>
    );
    }}

