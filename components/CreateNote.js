import React,{useEffect,useState} from 'react';
import { Button, View, Text, ScrollView, StyleSheet, Dimensions,TextInput, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createList } from '../store/actions/listAction';
 

export default function Create({ navigation }){
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();
    const { lists } = useSelector(state => state.list);
    const submitHandler = () => {
        dispatch(createList(
            name,
            description,
            () => {
                ToastAndroid.show(`List Created`);
                navigation.navigate('Home');
            },
            () => {
                ToastAndroid.show(`Something went wrong`);
            }
        ));
    };
    return(
        <View style={styles.container}>
           
            <View style={styles.view}><Text>Title</Text>
            <TextInput style={styles.textInput} value={name} onChangeText={(val) => setName(val)}></TextInput></View>
            <View style={styles.description}><Text>Description</Text>
            <TextInput style={styles.textInput} multiline={true} value={description} onChangeText={(val) => setDescription(val)}></TextInput></View>
            <View  style={styles.buttonStyle}><Button color='#00008B' title='Add Note' onPress={submitHandler}></Button></View>
        </View> 
    );
  }
  const screenWidth = Dimensions.get('window').width
// styles for the view
const styles = StyleSheet.create({
    view: {
        height: 70,
        margin: 10
    },
    description: {
        height: 150,
        paddingTop: 20,
        margin: 10
    },
    container: {
      flex: 1,
      bottom:0,
    },
    text: {
      fontSize: 40,
     
    },
    buttonStyle:{
        marginTop: 383
    },
    textInput: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        justifyContent: 'flex-end',
        flex: 1
    },

  });
  