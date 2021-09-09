import * as React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';


export default function MainScreen() {
    return (
        <View style={styles.container}>
          <Text>MainScreen!</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });