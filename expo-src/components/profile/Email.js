import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
    backgroundColor: '#FFF',
    flex: 5,
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailIcon: {
    color: 'black',
    fontSize: 30,
  },
  emailRow: {
    flex: 6,
    justifyContent: 'flex-start',
  },
  emailText: {
    fontSize: 20,
  },
  iconRow: {
    flex: 1,
    justifyContent: 'flex-start',
  },
})

//<TouchableOpacity onPress={() => onPressEmail(email)}>
//onPress={() => onPressEmail()}
export default class Email extends Component {
    render() { return(
    <View style={styles.container}>
      <View style={styles.iconRow}>
          <Icon
            name="email"
            underlayColor="transparent"
            iconStyle={styles.emailIcon}
          />
      </View>
      <View style={styles.emailRow}>
          <Text style={styles.emailText}>{this.props.email}</Text>
      </View>
    </View>
    );
    }}
