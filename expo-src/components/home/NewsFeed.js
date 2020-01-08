import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, ListItem, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import {Card, CardItem, Text, Body} from 'native-base'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      padding: 20
  },
  days: {
      fontSize: 30,
      textAlign: "center"
  },
  cardBody:{
      justifyContent: "center"
  },
  card:{
      paddingTop: 10,
      paddingHorizontal: 10

  }
})

export default class NewsFeed extends Component {
    render() { return(
    <ScrollView style={styles.container} pagingEnabled={true} horizontal={true}>
        <Card  style={styles.card}>
            <Text>Varun published a paper, congrats!</Text>
        </Card>
        <Card  style={styles.card}>
            <Text>VR Sickness won an award at a conference! Woohoo! </Text>
        </Card>
        <Card  style={styles.card}>
            <Text>We just got a new client, TourTech and are getting free Lollapalooza tickets.</Text>
        </Card>
    </ScrollView>
    );
    }}