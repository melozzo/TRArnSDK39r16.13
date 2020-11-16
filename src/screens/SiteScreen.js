import React , {useState, useEffect} from 'react';
import {useSelector } from 'react-redux';
import {  View, Button} from 'react-native';
import {styles} from '../styles/Styles'
import { Text, Card, ListItem, Divider } from 'react-native-elements'

const SiteScreen = ( {route, navigation })=>{
      const [activeSite, setActiveSite] = useState({})

      const siteList = useSelector( state=>state.site.siteList);
      const [propList, setPropList] = useState([])

      useEffect(() => {
            let siteId = JSON.stringify(route.params.siteId)
            let selected = siteList.find( s=>s.SiteID === parseInt(siteId));
            setActiveSite(selected);
            setPropList(Object.entries(selected))
      }, [route.params?.siteId]);



  return (
        <View>
            <Card>
                  <View>
                        <Text h3 >{activeSite.Name}</Text>
                        <Button
                              title="Add To Calendar"
                              onPress={() => navigation.navigate('Calendar')}
                              />
                        {
                              propList.map((prop,i) =>{
                                    return (
                                    <ListItem
                                                key={i}
                                                title={ prop[1] ? prop[1].toString() : "bunnies"}
                                                subtitle={prop[0]}
                                          />
                                    )
                              })
                        }
                  </View>
                
                </Card>
            
        </View>
   
  );
}

export default SiteScreen;