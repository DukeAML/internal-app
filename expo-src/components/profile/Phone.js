import React, { Component }  from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    flex: 1,
  },
  iconRow: {
    flex: 1,
    justifyContent: 'flex-start',
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
 //<TouchableOpacity onPress={() => this.props.onPressPhone(number)}>
 //onPress={() => onPressPhone(number)}
 //onPress={() => onPressSms()}

export default class Phone extends Component {
  render() {
      return(
      <View style={styles.container}>
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