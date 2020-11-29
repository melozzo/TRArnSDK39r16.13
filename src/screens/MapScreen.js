

import React, { useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {  View, Dimensions, Modal, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {styles} from '../styles/Styles'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as mapActions from './../redux-store/actions/map-actions';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import ModalPrompt from './../components/ModalPrompt'
import * as siteActions from './../redux-store/actions/site-actions';
import { ListItem, Header } from 'react-native-elements'

import LeftButton from './../components/LeftButton';
import CurrentLocation from './../components/CurrentLocation'
//import AsyncStorage from '@react-native-community/async-storage';






const MapScreen = ( {route, navigation})=>{
      let memberId=46996;// email white@album pwd snow
      const dispatch = useDispatch();
      const laCarte = useRef(null);

      const selectedMap = useSelector( state => state.map.selectedMap)
      let siteList = useSelector( state=> state.site.siteList);

   //   const [currentLocation, setCurrentLocation] = useState({latitude:0,longitude:0});
      const [savePromptVisible, setSavePromptVisible]= useState(false);
      const [defaultRegion, setDefaultRegion] = useState();
      const [coordList, setCoordList] = useState([]);
      const [showSpinner, setShowSpinner] = useState(false);


      useEffect(()=>{
            if(selectedMap === undefined)
                  return;
            dispatch(siteActions.fetchSites(selectedMap.MapID))
      },[selectedMap])

//      useEffect(()=>{
//             if(!route.params ){
//                   //setShowSpinner(true)
//                   getCurrentLocation();
//                   //setShowSpinner(false)
//             }
//       },[route.params?.mapId]);

//       useEffect(()=>{
           
//             if(route.params && route.params.mapId){
//                 let id = JSON.stringify(route.params.mapId);
//                  // setShowSpinner(false)
//                   setMapId( parseInt(id) );
//              } 
//       },[route.params?.mapId]);

      useEffect(()=>{
            let coords = [];
            for( let i=0; i< siteList.length; i++){
                  let marker = siteList[i];
                  coords.push({latitude:marker.Latitude, longitude:marker.Longitude});
                  setCoordList(coords);
            }
            zoomToExtent(coords);
      },[siteList]);

  

      return (
            <View style={styles.screen}>
                  <Header
                        leftComponent={<LeftButton  handleClick={toggleDrawer} />}
                        placement="center"
                        centerComponent={{ text: 'My Map', style: { color: '#fff' } }}
                        rightComponent={ <CurrentLocation getLocation={getCurrentLocation}/> }></Header>
                  
                  <MapView style={{position:'absolute',top:'0',left:'0',right:'0',bottom:'20'}}
                        ref={laCarte}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation={false}
                        style={styles.map}
                        region={defaultRegion}
                  >
                        {
                            siteList.map((marker,i )=> {
                                if(marker.Latitude && marker.Longitude ){
                                    return (
                                          <Marker
                                                title={marker.Name}
                                                key={i}
                                                coordinate={{latitude:marker.Latitude, longitude:marker.Longitude}}
                                          />
                                          )
                                    }
                              })
                        }  

                  </MapView>
            </View>
      )


      function toggleDrawer(){
            navigation.toggleDrawer();
      }

      async function getStoredMapId() {
            // let value = null;
            // try {
            //       const value = await AsyncStorage.getItem('lastMapId')
            //       return value;
            // } catch(e) {
            //       //alert("error fetching from storage");
            // } finally{
            //       return value;
            // }
      }
    
     

      async function getCurrentLocation(){
           const LONGITUDE_DELTA=.09;
           const LATITUDE_DELTA=.04;
                
            let { status } = await Location.requestPermissionsAsync();
                  if (status !== 'granted') {
                        alert('Permission to access location was denied');
                        return;
                  }
               
                  let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
                  let region =  {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                  };
                  setDefaultRegion(region);
                  //setShowSpinner(false);
            }

      function zoomToExtent(coordList){
            laCarte.current.fitToCoordinates(coordList, {edgePadding: { top:120, right: 20, bottom: 140, left: 20 },
            animated: false});
      }

     

      function saveCurrentLocation(){
            alert("location saved")
      }

      function calculateRegion(){
            // const { width, height } = Dimensions.get('window');
            // const ASPECT_RATIO = width / height;
            // const LATITUDE = 33.04652;
            // const LONGITUDE = -117.29960;
            // const LATITUDE_DELTA = 0.0922;
            // const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
            // const SPACE = 0.01;
      }
      

     
}

export default MapScreen;



      

      // useEffect(()=>{
            // if(route.params && route.params.memberId){
      //       let  memberId  = route.params.memberId;
//}
//       dispatch(mapActions.fetchLastMap(memberId))
// },[dispatch])