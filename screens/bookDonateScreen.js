import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config';
import {ListItem} from 'react-native-elements'
export default class BookDonateScreen extends React.Component{
    constructor(){
        super();
        this.state={
            requestedBooksList:[]
        }
        this.requestRef=null
    }
     getRequestedBooksList=()=>{
         this.requestRef=db.collection
     }
    render(){
        return(
            <View>
               
                </View>
        )
    }
}