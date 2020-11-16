
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    alignItems:'center'
  },
  map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  screenHeader:{
        height:70,
        backgroundColor:'#bae8cd',
        paddingTop:30
  },
  
  
});