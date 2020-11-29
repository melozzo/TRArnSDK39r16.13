import React from 'react';
import AlbumScreen from '../screens/AlbumScreen';
import MapScreen from '../screens/MapScreen';
import SiteScreen from '../screens/SiteScreen';
import JournalView from '../screens/JournalView';
import MapList from '../screens/MapList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView,  DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as siteActions from '../redux-store/actions/site-actions';
import {useSelector , useDispatch} from 'react-redux';


const Tab = createBottomTabNavigator();
const SiteListDrawer = createDrawerNavigator();




const CustomDrawerContent = (props) =>{
      const dispatch = useDispatch();
      const siteList = useSelector( state =>state.site.siteList);
      return (
                  <DrawerContentScrollView {...props}>
                        {
                              siteList.length >0 &&   siteList.map((site,i)=>{
                                    return   (
                                          <DrawerItem 
                                                key={i}
                                                label={site.Name? site.Name:""} 
                                                onPress={   () => {handleSiteSelected(site)}}
                                          />
                                    )
                              })
                        }
                  </DrawerContentScrollView>
            );


      function handleSiteSelected(site){
            props.navigation.navigate("Site")
            dispatch({type:siteActions.SET_SITE, selectedSite:site})
      }      
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


export default Drawer;



