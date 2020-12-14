import React, {useEffect} from 'react';
import AlbumScreen from '../screens/AlbumScreen';
import MapScreen from '../screens/MapScreen';
import SiteScreen from '../screens/SiteScreen';
import JournalView from '../screens/JournalView';
import MapList from '../screens/MapList';
import AuthScreen from './../screens/AuthScreen';
import CalendarScreen from './../screens/CalendarScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView,  DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as SiteActions from '../redux-store/actions/site-actions';
import {useSelector , useDispatch} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {  View} from 'react-native';
const Stack = createStackNavigator();

const SiteStack = () => {
  return (
      <Stack.Navigator initialRouteName="Calendar">
            <Stack.Screen name="Calendar" options={{headerShown:false}}  component={CalendarScreen}  />
            <Stack.Screen name="Site"    options={{headerShown:false}} component={SiteScreen}/>
      </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const SiteListDrawer = createDrawerNavigator();

const CustomDrawerContent = (props) =>{
      const dispatch = useDispatch();
      const selectedMap = useSelector(state=> state.map.selectedMap);
      const siteList = useSelector( state =>state.site.siteList);
      useEffect(()=>{
            if( ! selectedMap )
                 return;
           dispatch(SiteActions.fetchSites(selectedMap.MapID))
      },[selectedMap])

     
      return (
                  <DrawerContentScrollView {...props}>
                        <View style={{display:'flex',justifyContent:'flex-end'}}>
                        <Button
                              title="Change User"
                              type="outline"
                              onPress={handleAuthorize }
                              />
                        </View>
                       
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


      function handleAuthorize(){
            console.log('auth button pressed'); 
            props.navigation.navigate("Authentication");
      }

      function handleSiteSelected(site){
            props.navigation.navigate("Calendar", {screen:"Site"})
            dispatch({type:SiteActions.SET_SITE, selectedSite:site})
      }      
}

const TabNavigatorComponent = ( )=>{
      return (
            <Tab.Navigator  initialRouteName="Map">
                  <Tab.Screen name="MapList" component={MapList} />
                  <Tab.Screen name="Map" component={MapScreen}/>
                  <Tab.Screen name="Album" component={AlbumScreen} />
                  <Tab.Screen name="Calendar" component={SiteStack} />
                  <Tab.Screen name="Journal" component={JournalView} />
            </Tab.Navigator>
      )
}

const Drawer = ({route, navigation})=>{

      const authenticatedMember = useSelector(state =>state.auth.authenticatedMember);
      let defaultRoute = authenticatedMember === null ? "Authentication":"Tabs";
      return (
                  <SiteListDrawer.Navigator 
                         initialRouteName={defaultRoute}
                         drawerContent={props => <CustomDrawerContent {...props} />}
                  >
                        <SiteListDrawer.Screen
                              name="Tabs"
                              component={TabNavigatorComponent}
                        />
                        <SiteListDrawer.Screen
                              name="Authentication"
                              component={AuthScreen}
                        />
                                   
                  </SiteListDrawer.Navigator>
            )
}


export default Drawer;




