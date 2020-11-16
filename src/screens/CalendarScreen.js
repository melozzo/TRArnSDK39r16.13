import React, {useState, useEffect} from 'react';
import { Platform, Text, View, Button,} from 'react-native';
//import * as Calendar from 'expo-calendar';     
//import SimplerDatePicker from '@cawfree/react-native-simpler-date-picker';
//import TimePicker from 'react-native-simple-time-picker';

import Moment from 'moment'

const CalendarScreen = ( props )=>{
      const [date, setDate] = useState(Date.now);
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(true);

      // useEffect(() => {
      //       (async () => {
      //         const { status } = await Calendar.requestCalendarPermissionsAsync();
      //         if (status === 'granted') {
      //           const calendars = await Calendar.getCalendarsAsync();
      //           console.log('Here are all your calendars:');
      //           console.log({ calendars });
      //         }
      //       })();
      //     }, []);


          return (
            <View
              style={{
                flex: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
          <Text style={{color:'white',fontSize:30}}>you suck</Text>
          {/* <SimplerDatePicker
                        minDate={Moment('1/1/2019')}
                        maxDate={Moment('1/1/2022')}
                        onDatePicked={  onChange   } /> */}
            {/* <TimePicker
                  selectedHours={12}
                  selectedMinutes={12}
                  onChange={(hours, minutes) => {alert(hours + minutes )}}
            />                      */}
            </View>
          )

      function showDatepicker () {
            setShow(true);
            setMode('date');
      };

     function showTimepicker(){
            setShow(true);
            setMode('time');
      };

      function onChange ( ) {
            alert('you selected a date')
           // const currentDate = selectedDate || date;
           // setShow(Platform.OS === 'ios');
           // setDate(currentDate);
      };

      async function getDefaultCalendarSource() {
      const calendars = await Calendar.getCalendarsAsync();
      const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
      return defaultCalendars[0].source;
      }
      
      async function createCalendar() {
      const defaultCalendarSource =
            Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Traveloggia Calendar' };
      const newCalendarID = await Calendar.createCalendarAsync({
            title: 'Traveloggia Calendar',
            color: 'blue',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
      });
      console.log(`Your new calendar ID is: ${newCalendarID}`);
      }

}
export default CalendarScreen;