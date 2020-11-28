import React, {useEffect, useState} from 'react';
import AlbumScreen from './../screens/AlbumScreen';
import MapScreen from './../screens/MapScreen';
import SiteScreen from '../screens/SiteScreen';
import CalendarScreen from './../screens/CalendarScreen';
import JournalView from './../screens/JournalView';
import MapList from './../screens/MapList'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,  DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as siteActions from './../redux-store/actions/site-actions';
import {useSelector , useDispatch} from 'react-redux';


const Tab = createBottomTabNavigator();
const SiteListDrawer = createDrawerNavigator();



const CustomDrawerContent = (props) =>{
      const dispatch = useDispatch();
      let mapId = 22364;
      const siteList = useSelector( state =>state.site.siteList);
      return (
                  <DrawerContentScrollView {...props}>
                        {
                              siteList.length >0 &&   siteList.map((site,i)=>{
                                    return   (
                                          <DrawerItem 
                                                key={i}
                                                label={site.Name? site.Name:""} 
                                                onPress={   () => props.navigation.navigate("Site",{screen:"Site", params:{siteId:site.SiteID}}) }
                                          />
                                    )
                              })
                        }
                  </DrawerContentScrollView>
            );
}

const TabNavigatorComponent = ( )=>{
      return (
            <Tab.Navigator  initialRouteName="Map">
                  <Tab.Screen name="MapList" component={MapList} />
                  <Tab.Screen name="Map" component={MapScreen}/>
                  <Tab.Screen name="Album" component={AlbumScreen} />
                  <Tab.Screen name="Site" component={SiteScreen} />
                  <Tab.Screen name="Journal" component={JournalView} />
            </Tab.Navigator>
      )
}

const Drawer = ()=>{
      return (
                  <SiteListDrawer.Navigator 
                        initialRouteName="Tabs"
                         drawerContent={props => <CustomDrawerContent {...props} />}
                  >
                        <SiteListDrawer.Screen
                              name="Tabs"
                              component={TabNavigatorComponent}
                        />
                                   
                  </SiteListDrawer.Navigator>
            )
}




const RootNavigation = ( props )=>{

  return (
            <Drawer />
      )

}

export default RootNavigation