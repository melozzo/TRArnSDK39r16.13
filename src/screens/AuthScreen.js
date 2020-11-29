import React, {useState, useEffect } from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import { ButtonGroup}  from 'react-native-elements';
import { TextInput } from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 
import * as AuthActions from './../redux-store/actions/auth-actions'



const AuthScreen = ( props )=>{

      const authenticatedMember = useSelector(state =>state.auth.authenticatedMember);
      const buttons = ['Login','Create Account']
      const dispatch = useDispatch();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      return (
            <View style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                 <View style={{display:'flex',flexDirection:'row'}}>
                 <Fontisto
                                    name='email'
                                    size={24}
                                    color='black'
                              />
                  <TextInput
                        autoCapitalize = 'none'
                        style={{ width: 200, height: 30, borderColor: 'gray', borderWidth: 1 }}
                        value = {email}
                        onChange = {syntheticEvent => setEmail(syntheticEvent.nativeEvent.text)}
                        />
            </View>
            <View style={{display:'flex', flexDirection:'row'}}>
                  <Fontisto
                              name='locked'
                              size={24}
                              color='black'
                        />
                  <TextInput
                        autoCapitalize = 'none'
                        style={{width:200, height: 30, borderColor:'gray', borderWidth: 1}}
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
                        alert(`email:${email} password:${password}`)
                        dispatch( AuthActions.login(email, password))

                  break;

            }
      }


}
export default AuthScreen;