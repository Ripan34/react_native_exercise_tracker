import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Settings = () => {
    return (
      <View style={styles.container}>
          <Text style={styles.text} >HELLOO SETTINGS</Text>
      </View>
    );
}
const styles = StyleSheet.create({
   text: {
       color: 'red'
   },
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
       }
});
export default Settings;