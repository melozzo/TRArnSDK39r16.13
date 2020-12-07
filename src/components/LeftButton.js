import React from 'react';
import { Button } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons'; 



const LeftButton=(props)=>{
     
      return (<Button
      style={{}}
                  icon={<Fontisto name="nav-icon-list-a" size={24} color="black" />}
                  title="  Sites"
                  onPress={props.handleClick }
            />
      )
}



export default LeftButton;