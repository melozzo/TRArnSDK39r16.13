import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch } from 'react-redux';
import * as siteActions from './../redux-store/actions/site-actions';
import { Button, Text, View, FlatList} from 'react-native';
import {styles} from './../styles/Styles'
import { useLinkProps } from '@react-navigation/native';

const SiteList = ( props )=>{

     
      const siteList = useSelector( state =>state.site.siteList)

      return (
            <View style={styles.screen}>
                  
                   <FlatList 
                        data = {siteList}
                        keyExtractor = {item=>item.SiteID}
                        renderItem={ ({item})=>(
                                    <View>
                                          <Text>{item.Name}</Text>
                                          <Button 
                                                title="view=>"
                                                onPress={() => navigation.navigate("Site")}/>
                                    </View>)
                        }
                  /> 
            </View>
      )

}

export default SiteList;