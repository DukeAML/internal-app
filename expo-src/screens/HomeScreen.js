import * as WebBrowser from 'expo-web-browser';
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

import { MonoText } from '../components/StyledText';


export default function HomeScreen() {
  //var pg = require('pg');
  //var connectionString = "postgres://postgres:BronCavs#23@localhost/ip:5432/dvdrental";
  //var pgClient = new pg.Client(connectionString);
  //pgClient.connect();
  //var query = pgClient.query("SELECT actor_id from actor");
  //query.on("row", function(row,result)

    //result.addRow(row);
    
    //});
  return (
    <View>
      <ScrollView>
        <View>
          <Text>"Hey"</Text>
        </View>
      </ScrollView>
    </View>
  );
}