import React, {useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import { DATA } from './data';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements'
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
                   <Text style={styles.item}><CheckBox checkedColor='green' checked={true}/>
                   <Text>{item.name}{'\n'}<Text style={styles.itemDescription}>{item.description}</Text></Text>
                   </Text>
                </TouchableOpacity>}
                /> : <Text style={{textAlign: 'center'}}>No Lists</Text>}
            <View><Button color='#00008B' title='Add New' onPress={() => navigation.navigate('Add New') }></Button></View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:0,
    marginTop: 10
  },
  item: {
    backgroundColor: '#E3E4FA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 20,
    borderRadius: 10
  },
  itemDescription:{
    fontSize: 15,
    color: '#5c8a8a'
  },
});