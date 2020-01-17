import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ListItem, Linking } from 'react-native'
import { Icon, Card } from 'react-native-elements'
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

  linkContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    textAlignVertical: 'center',
    height: 70,
    marginBottom: 0
},
  container: {
      flexDirection: 'column',
  },
  icon: {
      color: 'black',
      textAlignVertical: 'center',
      height: 100,
  }
  
})

export default class LinksCard extends Component {
    render() { return(
        <View styles={styles.container}>
            <View style={styles.linkContainer}>
            <Icon
            name="link"
            underlayColor="transparent"
            style={styles.icon}
            size="45"

          />
          <Text style={{color: 'blue', fontSize: 20, padding: 10, textAlignVertical: "center"}}
      onPress={() => Linking.openURL('http://www.amlgroup.us')}>
        DAML Website
    </Text>
    </View>

    <View style={styles.linkContainer}>
            <Icon
            name="link"
            underlayColor="transparent"
            style={styles.icon}
            size="45"

          />
          <Text style={{color: 'blue', fontSize: 20, padding: 10}}
      onPress={() => Linking.openURL('https://www.cs.duke.edu/')}>
        Duke Computer Science
    </Text>
    </View>
    </View>
    );
    }}

