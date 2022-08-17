import AsyncStorage from "@react-native-async-storage/async-storage";

import { SET_LISTS,SET_LIST_ID } from "../type";
import store from "../";
const STORAGE_KEYS = {
    lists: 'myapp_lists',
    tasks: 'myapp_tasks'
}
 export const getLists = (onSuccess = () => {}, onError = () => {}) => {
    return async dispatch => {
        try{
            const listRes = await AsyncStorage.getItem(STORAGE_KEYS.lists);
            const lists = listRes ? JSON.parse(listRes) : [];
            dispatch({
                type: SET_LISTS,
                payload: lists,
            });
            onSuccess();
        }catch(err){
            console.log(err);
            onError();
        }
    };
 }; 

 export const createList = (name,description, onSuccess = () => {}, onError = () => {}) => {
    return async dispatch => {
        try{
            const newList = {
                name,
                description,
                id:`1ist-${new Date().getTime()}`
            };
            const { lists }= store.getState().list;
            const listsCopy = [...lists];
            listsCopy.push(newList);
            await AsyncStorage.setItem(STORAGE_KEYS.lists,JSON.stringify(listsCopy));
            dispatch({
                type: SET_LISTS,
                payload: listsCopy,

            });
            

            onSuccess();
        }catch(err){
            console.log(err);
            onError();
        }
    };
 };