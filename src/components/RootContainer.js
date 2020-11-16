import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {  View} from 'react-native';
import * as mapActions from './../redux-store/actions/map-actions';

const RootContainer = ( props) =>{
      const [activeMap, setActiveMap]=useState();
      const [siteList, setSiteList ] = useState([]);
      const [photoList, setPhotoList] = useState([]);
      const dispatch = useDispatch();
      // useEffect(()=>{
      //     const map =   DataTransport.getMap(46996);
      //     setSiteList(map.Sites)
      // })

      // useEffect(()=>{
      //       let memberId=46996;
      //       dispatch(mapActions.fetchLastMap(46996))
      // },[])

      return (               <View>
                                    {props.children}
                              </View>   
      )

}

export default RootContainer;