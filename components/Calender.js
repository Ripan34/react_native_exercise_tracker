import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {Agenda} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const Calender = props => {
  const [selected, setSelected] = useState(new Date());
 
    return (
      <View style={styles.container}>
      <Agenda
        selected={selected}
      items={{
        '2022-05-23': [{name: 'chest', workouts: ['bench press']}],
        '2022-05-24': [{name: 'shoulder', workouts: ['shoulder press']}]
      }}
      renderItem={(item, firstItemInDay) => {
        return <View style={styles.items}>
          <Text>{item.name}</Text>
            {item.workouts.map((i, ind) => (
              <Text key={ind}>{i}</Text>
          ))}
        </View>;
      }}
      renderEmptyData={() => {
        return <View>
        <Text>No workout today!</Text>
      </View>;
      }}
      onDayPress={day => {
        console.log('day pressed');
      }}
      dayComponent={({ date, state }) => {
        return (
          <TouchableOpacity onPress={() => {setSelected(date);}}>
            <Text
            >
              {date.day}
            </Text>
          </TouchableOpacity>
        );
      }}
      // theme={{
      //   agendaDayTextColor: 'blue',
      //   agendaDayNumColor: 'green',
      //   agendaTodayColor: 'red',
      //   agendaKnobColor: 'blue'
      // }}
      />
      </View>
    );
};
export default Calender;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50,
        height: 200
    },
    calender: {
    },
    items: {
      width: 200,
      height: 100,
      backgroundColor: 'white',
      justifyContent: 'center',
      margin: 20
    }
  });