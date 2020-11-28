import React, {useState} from 'react';
import { Text, View} from 'react-native';
import {styles} from './../styles/Styles';
import LeftButton from './../components/LeftButton';
import { Header } from 'react-native-elements';



const JournalView = ( props)=>{
      

      

      return (
            <View style={styles.screen}>
                  <Header
                              leftComponent={<LeftButton  handleClick={toggleDrawer} />}
                              placement="center"
                              centerComponent={{ text: 'Journal', style: { color: '#fff' } }}
                  />

                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>{'nothing here right now'}</Text>
                  </View>
            </View>
            );

      function toggleDrawer(){
            navigation.toggleDrawer();
      }


                                    
}

export default JournalView;