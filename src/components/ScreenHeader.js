import React from 'react'
import {styles } from './../styles/Styles';
import {  View} from 'react-native';


const ScreenHeader = (props)=> {
      return (
        <View style={styles.screenHeader}>
          {props.children}
        </View>
      );
    }
export default ScreenHeader