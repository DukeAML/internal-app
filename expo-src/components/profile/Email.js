import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ListItem, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    paddingBottom: 20
  },
  emailIcon: {
    color: 'black',
    fontSize: 30,
  },
  emailRow: {
    flex: 6,
  },
  emailText: {
    fontSize: 20,
    fontFamily: "Avenir"
  },
  iconRow: {
    flex: 1,
  },
})

//<TouchableOpacity onPress={() => onPressEmail(email)}>
//onPress={() => onPressEmail()}
export default class Email extends Component {
    render() { return(
    <View style={styles.emailContainer}>
      <View style={styles.iconRow}>
          <Icon
            name="email"
            underlayColor="transparent"
            iconStyle={styles.emailIcon}
          />
      </View>
      <View style={styles.emailRow}>
          <TextInput style={styles.emailText}>{this.props.email}</TextInput>
      </View>
    </View>
    );
    }}
