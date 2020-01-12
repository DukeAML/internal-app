import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, ListItem } from 'react-native'
import { Icon } from 'react-native-elements'
import {Card, CardItem, Body} from 'native-base'
import {Text} from 'react-native';
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
  }
})

export default class NextMeeting extends Component {
    render() { return(
    <View style={styles.container}>
        <Card  style={styles.cardBody}>
            <CardItem >
                <Body>
        <Text>Next meeting in...</Text>
        <Text style={styles.days}>{this.props.days} Days</Text>
        <Text style={styles.type}>{this.props.type}</Text>
        <Text style={styles.location}>{this.props.location}</Text>
        </Body>
    
        </CardItem>
        </Card>
    </View>
    );
    }}