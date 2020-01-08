import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ListItem, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row'
  }
  
})

export default class ProfileButton extends Component {
    render() { return(
    <View style={styles.container}>
        <Button
          title="View My Profile"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
    </View>
    );
    }}