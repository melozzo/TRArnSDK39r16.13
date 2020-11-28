import React , {useState, useEffect} from 'react';
import {useSelector } from 'react-redux';
import {  View, Button} from 'react-native';
import {styles} from '../styles/Styles'
import { Text, Card, ListItem, Header} from 'react-native-elements'
import LeftButton from './../components/LeftButton';





const SiteScreen = ( {route, navigation })=>{
      const [activeSite, setActiveSite] = useState({})
      const siteList = useSelector( state=>state.site.siteList);
      const [propList, setPropList] = useState([])

      useEffect(() => {
           // let siteId = JSON.stringify(route.params.siteId);
           // console.log('selected site', siteId)
            // let selected = siteList.find( s=>s.SiteID === parseInt(siteId));
            // setActiveSite(selected);
            // setPropList(Object.entries(selected))
      }, [route.params?.siteId]);



      return (
            <View>
                  <Header
                        leftComponent={<LeftButton  handleClick={toggleDrawer} />}
                        placement="center"
                        centerComponent={{ text: 'Site Name', style: { color: '#fff' } }}
                  />
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
                                                >
                                                      <ListItem.Subtitle>{prop[0]}</ListItem.Subtitle>
                                                      <ListItem.Title>{ prop[1] ? prop[1].toString() : ""}</ListItem.Title>
                                          </ListItem>
                                          )
                                    })
                              }
                        </View>
                  
                  </Card>
                  
            </View>
   
      );


function toggleDrawer(){
      navigation.toggleDrawer();
}




}

export default SiteScreen;