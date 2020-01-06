import React, {Component} from 'react';
import {Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground, Image
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const images = {
    varun_nair: require('../../assets/images/profile_pics/varun_nair.jpeg'),
    luke_truitt: require('../../assets/images/profile_pics/luke_truitt.jpeg'),
    daniel_tao: require('../../assets/images/profile_pics/daniel_tao.jpeg'),
    mary_gooneratne: require('../../assets/images/profile_pics/mary_gooneratne.jpeg'),
    header: require('../../assets/images/header.jpg')
};

const styles = StyleSheet.create({
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerContainer: {},
    headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
    },
    android: {
        alignItems: 'center',
    },
    })},
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: 'gray',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
  },
  userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
  }
});

export default class ProfileHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={images.header}
      >
          <View style={styles.headerColumn}>
          <Image
            style={styles.userImage}
            source={images.daniel_tao}
          />
          <Text style={styles.userNameText}>{this.props.name}</Text>
          <View style={styles.userAddressRow}>
            <View style={styles.userCityRow}>
              <Text style={styles.userCityText}>
                {this.props.team} | {this.props.role}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
  }
}