import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, ListItem } from 'react-native'
import { Icon } from 'react-native-elements'
import {Card, CardItem, Body} from 'native-base'
import {Text} from 'react-native';
import PropTypes from 'prop-types'
import { setCustomText } from 'react-native-global-props';


const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      fontFamily: "Avenir",
      padding: 10,
  },
  days: {
      fontSize: 30,
      textAlign: "center",
      fontFamily: "Avenir",
      color: "white"

  },

  type: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir",
    color: "white"

},

location: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir",
    color: "white"

},
  cardBody:{
      justifyContent: "center",
      fontFamily: "Avenir",
      color: "white"
  }
})

export const cardText = { 
    style: { 
      fontFamily: "Avenir",
      color: "White"
    }
  }


export default class NextMeeting extends Component {
    render() 
    { 
        setCustomText(cardText)
        return(
        <View style={styles.container}>
        <Card  style={styles.cardBody}>
        <CardItem style={{backgroundColor: "black"}}>
        <Body>
        <Text style={styles.location}>Next meeting in...</Text>
        <Text style={styles.days}>{this.props.days} Days</Text>
        <Text style={styles.type}>{this.props.type}</Text>
        <Text style={styles.location}>{this.props.location}</Text>
        </Body>
    
        </CardItem>
        </Card>
    </View>
    );
    }}