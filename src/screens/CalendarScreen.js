import React, {useState, useEffect} from 'react';
import { Platform, Text, View, Button,Dimensions} from 'react-native';
import { Header} from 'react-native-elements'
import LeftButton from './../components/LeftButton';
import {StyleSheet, ScrollView,  TouchableOpacity} from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
    });

const CalendarScreen = ( {route, navigation} )=>{
      const [selectedDate, setSelectedDate] = useState(new Date().toLocaleString());
      const sampleEvents = [
            { 'start': '2020-03-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
            { 'start': '2020-03-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
            { 'start': '2020-03-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
            { 'start': '2020-03-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
            { 'start': '2020-03-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
            { 'start': '2020-03-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
            { 'start': '2020-03-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
            { 'start': '2020-03-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
            { 'start': '2020-03-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
            { 'start': '2020-03-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
          ]
               
  

return (
            <View>
                  <Header
                        leftComponent={<LeftButton  handleClick={toggleDrawer} />}
                        placement="center"
                        centerComponent={{ text: 'Calendar',style: { color: '#fff' } }}
                  />
                 <WeeklyCalendar events={sampleEvents} style={{ height: 700 }} />
            </View>
  );

      

      function toggleDrawer(){
            navigation.toggleDrawer();// navigation events bubble up
      }

    

}
export default CalendarScreen;