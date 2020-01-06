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
import MemberListItem from '../components/directory/MemberListItem'
const members =[
    {
        name: "Daniel Tao",
        role: "Data Science Lead"
    },
    {
        name: "Varun Nair",
        role: "Data Science Lead"
    },
    {
        name: "Luke Truitt",
        role: "Data Science Lead"
    },
    {
        name: "Mary Gooneratne",
        role: "Data Science Lead"
    }
]

export default function MembersScreen() {
  return (
    <View>
        {members.map((prop, key) => {
         return (
            <MemberListItem name={prop.name} role={prop.role}/>
         );
      })}
    </View>
  );
}
