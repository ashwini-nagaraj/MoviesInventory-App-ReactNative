import { StyleSheet, View, TextInput,ScrollView, Image,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {  Feather } from '@expo/vector-icons'
import APP_BANNER from '../assets/images/istockphoto-1191001701-612x612.jpeg';
import ErrorScreen from './error-screen';
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies, getMovieDetails} from '../redux/actions';

export default function Home() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState({
    placeholder:"Enter a movie",
  });

  const {movies, movieDetails} = useSelector(state => state.reducers);
  const dispatch = useDispatch();

  const fetchMovies = (paramMovieName) => {
    dispatch(getMovies(paramMovieName));
  }

  const fetchMovieDetails =(movie, id) => {
    const res = dispatch(getMovieDetails(id));
    movieDetails= res
    navigation.navigate('Movie Description', {movie, movieDetails,
          onGoBack: () => refresh(),
        });
  }

  useEffect(() => {
    
  }, []);

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
                value={inputValue.placeholder}
                placeholderTextColor='#666'
                style={styles.Searchbox}
                onChangeText={text=> setInputValue(prevState => {
                  return {...prevState, placeholder:text}
                })}
                onSubmitEditing={(e)=>fetchMovies(e.target.value)}
                onFocus= {() => setInputValue(prevState => {
                  return {...prevState, placeholder:''}
                })}
                onBlur={() => setInputValue(prevState => {
                  return {...prevState, placeholder: inputValue.placeholder}
                })}
                />
              < Feather name='search' size={22} color='#666' style={styles.SearchboxIcon} /> 
              </View>
        </ImageBackground> x
        {movies  ? (
        <FlatList 
        style={{marginBottom: 10, marginTop: 40}}
        horizontal={true}
        data={movies}
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
