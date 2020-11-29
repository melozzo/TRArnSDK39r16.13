import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './../components/Drawer';
import AuthScreen from './../screens/AuthScreen';






const RootNavigation = ( props )=>{
      const Stack = createStackNavigator();


      return (
            
                  <Stack.Navigator>
                        <Stack.Screen name="AuthScreen" component= {AuthScreen} />
                        <Stack.Screen name = "Drawer" component = {Drawer} />
                  </Stack.Navigator>
            
      )

}

export default RootNavigation