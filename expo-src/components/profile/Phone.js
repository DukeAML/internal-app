import React, { Component }  from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ListItem } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

export default class Phone extends Component {
  render() {
      return(
      <View style={styles.phoneContainer}>
      <View style={styles.iconRow}>
        <Icon
            name="call"
            underlayColor="transparent"
            iconStyle={styles.phoneIcon}
            />
        </View>
        <View style={styles.phoneRow}>
            <Text style={styles.phoneNumberText}>{this.props.number}</Text>
        </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  phoneContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingBottom: 20
  },
  iconRow: {
    flex: 1,
    paddingTop: 20
  },
  phoneIcon: {
    color: 'black',
    fontSize: 30,
  },
  phoneNumberText: {
    fontSize: 20,
  },
  phoneRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
});