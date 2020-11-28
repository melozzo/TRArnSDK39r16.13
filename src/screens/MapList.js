import React, {useCallback, useEffect, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {  Text, View, FlatList, Button} from 'react-native';
import {styles} from './../styles/Styles'
import * as mapActions  from './../redux-store/actions/map-actions'
import * as siteActions from './../redux-store/actions/site-actions';
import { ListItem, Header } from 'react-native-elements'
import Moment from 'moment';
import { AntDesign } from '@expo/vector-icons'; 
//import AsyncStorage from '@react-native-community/async-storage';


const MapList = ( {navigation})=>{
      
      let memberId=46996;

      const maplist = useSelector( state =>state.map.mapList);
   
      const dispatch = useDispatch();

      
      useEffect(()=>{
            dispatch(mapActions.fetchMaps(memberId))
      },[])

      const renderItem = ({ item }) => {
            console.log(item.CreateDate)
            return(
                  <ListItem
                  bottomDivider
                  onPress={() =>selectMap(item)}
                  >
                        <ListItem.Title>{item.MapName}</ListItem.Title>
                        <ListItem.Subtitle>{item.CreateDate}</ListItem.Subtitle>
                  </ListItem>
            )
      }

      const keyExtractor = (item, index) => index.toString()
      return (
            <View style={styles.screen}>
                
                  <Header
                        placement="center"
                        centerComponent={{ text: 'Map List', style: { color: '#fff' } }}
                        rightComponent={  <AntDesign name="pluscircle" size={34} color="black" />}></Header>
            
                { maplist.length > 0 &&
                  <FlatList
                        style={{width:'100%'}}
                        keyExtractor={keyExtractor}
                        data={maplist}
                        renderItem={renderItem}
                />
                }  
            </View>
      )


      function selectMap(map){
            dispatch(siteActions.fetchSites(map.MapID))
            navigation.navigate('Map',{screen:"Map", params:{mapId:map.MapID}});
      }
    
      async function storeData (mapId) {
            // try {
            //   await AsyncStorage.setItem('lastMapId', mapId)
            // } catch (e) {
            //   // saving error
            // }
      }

}

export default MapList;

// <FlatList 
//                         data= {maplist}
//                         keyExtractor={item=> item._id}
//                         renderItem={({ item }) => 
//                        <ListItem
//                        leftIcon={{name:'home'}}
//                               title={item.MapName}
//                               subtitle='just kidding'
//                               chevron
//                               bottomDivider
//                               onPress={() =>selectMap(item)}
//                         ></ListItem>}
//                   />