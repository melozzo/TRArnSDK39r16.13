import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,
      FlatList} from 'react-native';
import {styles} from './../styles/Styles'

const JournalView = ( props)=>{
      const [goal, setGoal] = useState();
      const [goalList, setGoalList] = useState([]);

      const handleChangeText=(txt)=>{
            setGoal(txt);
      }
      const handleAddGoal = ( )=>{
            console.log(goal)
            setGoalList(goalList=>[...goalList,{id:Math.random().toString() , value:goal}]);
      } 

  return (
        <View style={styles.screen}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <TextInput 
                        onChangeText = {handleChangeText}
                        value={goal}
                        placeholder='you really suck'
                        style={{
                              width:200,
                              borderBottomColor:"black",
                              borderBottomWidth:1
                        }}
                  
                  />
                  <Button title="add to list"
                        onPress= {handleAddGoal}/>
            </View>
            <View>
                        <FlatList
                              data = {goalList}
                              keyExtractor={item => item.id}
                              renderItem={ ( {item} ) =>
                                   
                                          <Text>{item.value} </Text> 
                                    
                              }
                        
                        />

                      
            </View>
        </View>
   
  );
}

export default JournalView;