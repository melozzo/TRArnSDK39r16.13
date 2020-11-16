import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button,
      FlatList} from 'react-native';
import {styles} from './../styles/Styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const AlbumScreen= ( props)=>{

      const [image, setImage] = useState();

      useEffect(()=>{
            getPermissionAsync();
      },[])


      return (
            <View style={styles.screen}>
                  <View style={{ height:200, alignItems: 'center', justifyContent: 'center' }}>
                        <Button title="Pick an image from camera roll" onPress={pickImage} />
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                  </View>
            </View>
      
      )


      async function getPermissionAsync(){
            if (Constants.platform.ios) {
              const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          };
        
         async function pickImage (){
            try {
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
              if (!result.cancelled) {
                setImage(result.uri)
              }
        
              console.log(result);
            } catch (E) {
              console.log(E);
            }
          };
        
}

export default AlbumScreen;