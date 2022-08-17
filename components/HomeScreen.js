import React, {useEffect, useState} from 'react';
import { Button, View, Text, ScrollView, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import { DATA } from './data';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../store/actions/listAction';
export default function Home({ navigation,route }){
    // const data_list = DATA.map((list) => {
    //     return <Text key={list.id}>{list.title}{'\n'}{'\n'}{'\n'} </Text>
    // })
    const [state,setState] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getLists(() => setState(true)));
    },[dispatch]);
    const {lists} = useSelector(state => state.list);
    return (
        <View  style={styles.container}>
                         
                {lists.length > 0 ? <FlatList
                keyExtractor={(item) => item.id}
                data={lists}
                renderItem={({item}) => <TouchableOpacity>
                  <Text>{item.name}</Text>
                </TouchableOpacity>}
                /> : <Text style={{textAlign: 'center'}}>No Lists</Text>}
            <Button styles={{backgroundColor: '#00008B'}} title='Add New' onPress={() => navigation.navigate('AddNew') }></Button>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:0,
  },
});