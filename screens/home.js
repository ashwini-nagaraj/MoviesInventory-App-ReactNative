import { StyleSheet, View, TextInput,ScrollView, Image,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import React, {useState} from 'react';
import {  Feather } from '@expo/vector-icons'
import {getMovies, getMovieDetails} from '../apis/api';
import APP_BANNER from '../assets/images/istockphoto-1191001701-612x612.jpeg';
import ErrorScreen from './error-screen';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [state, setState] = useState({
    placeholder:"Enter a movie",
    results:[]
  });
  const navigation = useNavigation();

  async function fetchMovies(paramMovieName) {
    const { data } = await getMovies(paramMovieName);
    let results= data.Search;
    setState(prevState => {
      return {...prevState, results:results}
    });
  }

  async function fetchMovieDetails(movie, id){   
    const { data } = await getMovieDetails(id);
    navigation.navigate('Movie Description', {movie, data} );
  }

  return (
    <ScrollView style={{backgroundColor: '#000'}} blurRadius={100}>
       <View  style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
       </View> 
       <View style={{marginHorizontal: 14}}>
        <ImageBackground
        style={{height: 350, width: '100%', backgroundColor: '000'}}
        resizeMode='cover'
        source={{uri:APP_BANNER}}
        >
          <View style={styles.SearchboxContainer}>
             <TextInput
                value={state.placeholder}
                placeholderTextColor='#666'
                style={styles.Searchbox}
                onChangeText={text=> setState(prevState => {
                  return {...prevState, placeholder:text}
                })}
                onSubmitEditing={()=>fetchMovies(state.placeholder)}
                onFocus= {() => setState(prevState => {
                  return {...prevState, placeholder:''}
                })}
                onBlur={() => setState(prevState => {
                  return {...prevState, placeholder: state.placeholder}
                })}
                />
              < Feather name='search' size={22} color='#666' style={styles.SearchboxIcon} /> 
              </View>
        </ImageBackground> 
        {state.results ? (
        <FlatList 
        style={{marginBottom: 10, marginTop: 40}}
        horizontal={true}
        data={state.results}
        renderItem={( {item} ) => ( item.Poster!=='N/A' && (
            <TouchableOpacity style={{marginRight: 20}} key={item.imdbID} onPress={()=> fetchMovieDetails(item, item.imdbID)}>
              <Image source={{uri: item.Poster}} style={{height: 300, width: 200}} />
              <View style={{position: "absolute", height: 5, width: '100%',opacity: 0.8}}></View>
            </TouchableOpacity>
        ))}
        />
        ) : (<ErrorScreen/>)}
    </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
SearchboxContainer: {
    flexDirection: 'row',
    marginVertical: 20, 
    width: '50%',
    alignSelf: 'center', 
    backgroundColor: '#fff', 
    elevation: 10,
    borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
    width: '100%'
  },
  SearchboxIcon: {
    position: 'absolute', 
    right: 20, 
    top: 14
  }
});
