import React, {useCallback, useEffect} from 'react';
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

      //redux use Dispatch Hook
      const dispatch = useDispatch();
      // redux use Selector Hook - deprecated
      const userMaps = useSelector( state =>state.map.mapList)
      
      useEffect(()=>{
            useCallback( ()=>
            dispatch(mapActions.fetchMaps(memberId))
            );

      },[dispatch, memberId])

      
      

      const renderItem = ({ item }) => {
            console.log(item.CreateDate)
            return(
            
            <ListItem
              title={item.MapName}
              subtitle={Moment(item.CreateDate).format('MM/DD/yyyy')}
              leftAvatar={{ source: { uri: item.avatar_url } }}
              bottomDivider
              chevron
              onPress={() =>selectMap(item)}
            />
      )
            }

      const keyExtractor = (item, index) => index.toString()
      return (
            <View style={styles.screen}>
                
                  <Header
                        placement="center"
                        centerComponent={{ text: 'Map List', style: { color: '#fff' } }}
                        rightComponent={  <AntDesign name="pluscircle" size={34} color="black" />}></Header>
            
                { userMaps.length > 0 &&
                  <FlatList
                        style={{width:'100%'}}
                        keyExtractor={keyExtractor}
                        data={userMaps}
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
//                         data= {userMaps}
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