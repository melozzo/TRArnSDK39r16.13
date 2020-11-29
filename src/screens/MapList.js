import React, {useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {  Text, View, FlatList, Button} from 'react-native';
import {styles} from './../styles/Styles'
import * as mapActions  from './../redux-store/actions/map-actions'
import { ListItem, Header } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 
//import AsyncStorage from '@react-native-community/async-storage';


const MapList = ( {navigation})=>{
      
      let member= useSelector(state => state.auth.authenticatedMember)

      const maplist = useSelector( state =>state.map.mapList);
   
      const dispatch = useDispatch();

      
      useEffect(()=>{
            dispatch(mapActions.fetchMaps(member.MemberID))
      },[member])

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
                        leftComponent={  <AntDesign name="pluscircle" size={34} color="black" />}></Header>
            
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
            dispatch({type:mapActions.SET_MAP, selectedMap:map})
            navigation.navigate('Map',{screen:"Map"});
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