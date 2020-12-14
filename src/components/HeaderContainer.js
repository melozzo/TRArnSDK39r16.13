import React from 'react';
import {View, Text} from 'react-native'
import { Header} from 'react-native-elements'
import LeftButton from './LeftButton';




const HeaderContainer = ( {navigation})=>{

      return (
            <Header 
            >
                  
                  <LeftButton  handleClick={toggleDrawer} />

            </Header>
      )

      function toggleDrawer(){
            navigation.toggleDrawer();// navigation events bubble up
      }

}

export default HeaderContainer