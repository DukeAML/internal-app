import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, ListItem, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import {Card, CardItem, Body} from 'native-base'
import {Text} from 'react-native';
import PropTypes from 'prop-types'
import NewsCard from './NewsCard'
const News = [
    {title: "Congrats Varun!",
    text: "DAMLer Varun Nair had a paper published in a fancy research journal."},
    {title: "Mary is being replaced",
    text: "Mary is sad and heartbroken."},
    {title: "Mary is not actually happy.",
    text: "It's all a facade."},
    {title: "Luke is a baller",
    text: "I miss him!"}
]
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
    <ScrollView style={styles.container} pagingEnabled={true} horizontal={true} >
        {News.map(item => <NewsCard title={item.title} text={item.text}></NewsCard>)}
    </ScrollView>
    );
    }}