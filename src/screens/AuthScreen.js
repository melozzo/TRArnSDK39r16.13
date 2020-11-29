import React, {useState, useEffect } from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import { ButtonGroup, Input, Header}  from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons'; 
import * as AuthActions from './../redux-store/actions/auth-actions'
import * as MapActions from './../redux-store/actions/map-actions';


const AuthScreen = ( {route, navigation} )=>{

      const authenticatedMember = useSelector(state =>state.auth.authenticatedMember);
      const buttons = ['Login','Create Account', 'Skip']
      const dispatch = useDispatch();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const selectedMap = useSelector( state => state.map.selectedMap)

      useEffect(()=>{
            if ( ! authenticatedMember )
                   return;
          
            MapActions.fetchLastMap(authenticatedMember.MemberID)
           
 
       },[authenticatedMember]);

       useEffect(()=>{
             if( ! selectedMap.MapID)
                  return;
            navigation.navigate("Tabs")
       })

      return (
            <View style={{display:'flex', alignItems:'center', flexDirection:'column', paddingTop:26}}>
                
                 <View style={{display:'flex',flexDirection:'row'}}>
                 
                  <Input
                        autoCapitalize = 'none'
                        label="email"
                        rightIcon={
                              <Fontisto
                                    name='email'
                                    size={24}
                                    color='black'
                                    style={{marginRight:10}}
                              />
                        }
                        value = {email}
                        onChange = {syntheticEvent => setEmail(syntheticEvent.nativeEvent.text)}
                        />
            </View>
            <View style={{display:'flex', flexDirection:'row'}}>
                  
                  <Input
                        autoCapitalize = 'none'
                        label = 'password'
                        secureTextEntry={true}
                        rightIcon={
                              <Fontisto
                                    name='locked'
                                    size={24}
                                    color='black'
                                    style={{marginRight:10}}
                              />
                        }
                        value={password}
                        onChange = { e=>setPassword(e.nativeEvent.text)  }
                  />


            </View>
                  

                  <ButtonGroup
                        onPress={handleButtonClick}
                        
                        buttons={buttons}
                        containerStyle={{height: 45}}
                  />

            </View>
      )

   
      function handleButtonClick( index ){
            switch(index){
                  case 0:
                      
                        dispatch( AuthActions.login(email, password))

                  break;

            }
      }


}
export default AuthScreen;