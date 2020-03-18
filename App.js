import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text, TouchableOpacity} from 'react-native'

export default class App extends Component {

	render() {
		return (
      <View style={styles.container}>
          <View>
            <TouchableOpacity testID={'mybutton'} style={styles.button}  
                onPress={() =>Alert.alert('', "This is simple message",  [{text: 'OK',  onPress: () =>console.log('Clicked "Click ME!" button')}])}>  
                  <Text testID='alertik' style={styles.buttonText}>Click Me!</Text>
            </TouchableOpacity>
          </View>
      </View>   
	  );
  } 
} 



const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#262929',
},
    button: {
        width: 350,
        borderRadius: 15,
        marginTop: "10%",
        backgroundColor: '#00b8d9',
        padding: 20,
    },

    buttonText: {
        fontWeight: '100',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
});	