import { Text, View, StyleSheet} from 'react-native';
import React from 'react';

const ErrorScreen = () => 
{
    return (
        <View style={ styles.container}>
            <Text style={ styles.setColorWhite}>Oh darn. We don't have that movie.</Text>
            <Text style={ styles.setColorWhite}>Try searching for another movie</Text>
        </View>
    )
}

export default ErrorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      setColorWhite : {
        color: '#fff',
        fontSize: 20,
        fontWeight : 'bold' 
      },
  });