import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';

const images = {
    varun_nair: require('../../assets/images/profile_pics/varun_nair.jpeg'),
    luke_truitt: require('../../assets/images/profile_pics/luke_truitt.jpeg'),
    daniel_tao: require('../../assets/images/profile_pics/daniel_tao.jpeg'),
    mary_gooneratne: require('../../assets/images/profile_pics/mary_gooneratne.jpeg'),
};

export default class MemberListItem extends Component {
    render() { 
        var photo = images[(this.props.name).toLowerCase().split(' ').join('_')]
        return (
        <ListItem
        leftAvatar={{
            source: photo,
            showEditButton: true,
        }}
        title={this.props.name}
        subtitle={this.props.role}
        chevron
    />
    )}
};