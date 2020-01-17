import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, ListItem, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import {Card, CardItem, Text, Body, Title} from 'native-base'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    
  cardBody:{
      justifyContent: "center",
      padding: 10
  },
  card:{
      paddingTop: 10,
      paddingHorizontal: 10,
      height: 150

  }
})

export default class NewsCard extends Component {
    render() { return(
        <Card style={styles.card}>
            <Title>{this.props.title}</Title>
            <Text>{this.props.text}</Text>
        </Card>
    );
    }}