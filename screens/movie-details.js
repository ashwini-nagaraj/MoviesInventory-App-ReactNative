import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const MovieDetails=({route, plot}) =>{
    const { item } = route.params;

    
  return (
    <View style={styles.container}>
      <Text key={item.imdbID}  style={styles.title}>About</Text>
        <View style={styles.modal}>
        <Text style={styles.modalText}>{item.Title}</Text>
        <ImageBackground
        style={{height: 400, width: '100%', backgroundColor: '000'}}
        resizeMode='conatin'
        source={{uri:item.Poster}}
        ></ImageBackground>
        <Text style={styles.modalText}>Year Released: {item.Year}</Text>
        <Text style={styles.modalText}>Type: {item.Type}</Text>
        </View>
    </View>
  );
}

export default MovieDetails

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20,
    color: '#fff'
  },
  title:{
    fontSize: 24,
    fontWeight:'700',
    marginBottom: 5,
    color: '#fff',
    alignItems: 'center'
  },
  
  modal:{
    padding:20,
    marginBottom:20,
    alignItems: 'center'
  },
  modalText:{
    fontSize: 24,
    marginTop:10,
    marginBottom:20,
    fontWeight: '500',
    color: '#fff',
    alignItems: 'center'
  }

});


