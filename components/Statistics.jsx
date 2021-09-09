import * as React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';


export default function Statistics() {
    return (
        <View style={styles.container}>
          <Text>Statistics!</Text>
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