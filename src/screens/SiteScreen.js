import React , {useState, useEffect} from 'react';
import {useSelector } from 'react-redux';
import {  View, Button} from 'react-native';
import {styles} from '../styles/Styles'
import { Text, Card, ListItem, Header} from 'react-native-elements'
import LeftButton from './../components/LeftButton';





const SiteScreen = ( {route, navigation })=>{
      const selectedSite = useSelector( state=> state.site.selectedSite)
      const [propList, setPropList] = useState([]);// for now since we are lazy 

      useEffect(() => {

            if(selectedSite === undefined)
            return;
            console.log('site', selectedSite.Name)
          
            setPropList(Object.entries(selectedSite))
      }, [selectedSite]);



      return (
            <View>
                  <Header
                        leftComponent={<LeftButton  handleClick={toggleDrawer} />}
                        placement="center"
                        centerComponent={{ text: selectedSite.Name, style: { color: '#fff' } }}
                  />
                  <Card>
                        <View>
                         
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