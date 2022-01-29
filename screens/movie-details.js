import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import NOMOVIE_BANNER from '../assets/images/images.jpeg';

const MovieDetails=({route}) =>{
    const { movie, data } = route?.params || {}; 
  return (
    <>
    {movie ? (
    <View style={styles.container}>
      <Text key={movie.imdbID}  style={styles.title}>About</Text>
        <View style={styles.modal}>
        <Text style={styles.movieTitle}>{movie.Title}</Text>
        <ImageBackground
        key={movie.imdbID}
        style={{height: 200, width: '100%', backgroundColor: '000'}}
        resizeMode='contain'
        source={{uri:movie.Poster}}
        ></ImageBackground>
        <Text style={styles.modalText}>Year Relaease: {movie.Year}</Text>
        {data.Genre!== 'N/A' && (
        <Text style={styles.modalText}>Genre: {data.Genre}</Text>)}
          {data.Actors!== 'N/A' && (
        <Text style={styles.modalText}>Cast: {data.Actors}</Text>)}
        {data.Director!== 'N/A' && (
        <Text style={styles.modalText}>Director: {data.Director}</Text>)}
        {data.Plot!== 'N/A' && (
        <Text style={styles.modalTextPlot}>{data.Plot}</Text>)}   
        {data.imdbRating!== 'N/A' && (  
        <Text style={styles.modalText}>Rating: {data.imdbRating}</Text>)}
        </View>
    </View>
    ):(<View style={styles.container}>
      <Text style={styles.title}>No movie selected :(</Text>
        <ImageBackground
        style={{height: 350, width: '100%', backgroundColor: '000', marginTop: 50, marginBottom: 20}}
        resizeMode='contain'
        source={{uri:NOMOVIE_BANNER}}
        />
      </View>)
        }
        </>
  );
}

export default MovieDetails;

  
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
  movieTitle:{
    fontSize: 24,
    fontWeight:'600',
    marginBottom: 10,
    color: '#fff',
    alignItems: 'center'
  },
  
  modal:{
    padding:20,
    marginBottom:20,
    alignItems: 'center',
    alignItems: 'center'
  },
  modalText:{
    fontSize: 15,
    marginTop:10,
    marginBottom:20,
    fontWeight: '500',
    color: '#fff',
    alignItems: 'center'
  },
  modalTextPlot:{
    fontSize: 15,
    marginTop:10,
    marginBottom:20,
    fontWeight: '500',
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    margin: 400

  }
});


