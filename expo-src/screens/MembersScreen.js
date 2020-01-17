import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MemberListItem from '../components/directory/MemberListItem';
import { setCustomText } from 'react-native-global-props';
import {customTextProps} from '../constants/Layout';

const members =[
    {
        name: "Daniel Tao",
        role: "Data Science Lead",
        key: 1
    },
    {
        name: "Varun Nair",
        role: "Data Science Lead",
        key: 2
    },
    {
        name: "Luke Truitt",
        role: "Data Science Lead",
        key: 3
    },
    {
        name: "Mary Gooneratne",
        role: "Data Science Lead",
        key: 4
    }
]

export default function MembersScreen() {
  setCustomText(customTextProps);
  return (
    <View>
        {members.map((prop, key) => {
         return (
            <MemberListItem name={prop.name} role={prop.role} key={key}/>
         );
      })}
    </View>
  );
}
