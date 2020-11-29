import React from 'react';
import { Fontisto } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';



const CurrentLocation =(props)=>{
      const {getLocation} = props;
      return 
            <Button
                        iconRight
                        icon={<Fontisto name="map-marker" size={24} color="black" />}
                        title="Locate  "
                        onPress={() => {
                        getLocation();
                                    }}
            />
}
export default CurrentLocation