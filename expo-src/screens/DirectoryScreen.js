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

export default function DirectoryScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.directoryContainer}>
          <Text style={styles.directoryText}>
            [Teams]
          </Text>
          <Text style={styles.directoryText}>
            [Projects]
          </Text>
          <Text style={styles.directoryText}>
            [Messaging]
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  directoryContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  directoryScreenFilename: {
    marginVertical: 7,
  },
  directoryText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
