import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';

const {width, height} = Dimensions.get('window');
const ConfirmWorkout = props => {
    const selectedItems = props.route.params.selectedItems;
    const [date, setDate] = useState(new Date())

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Text>What date would you like to add this workout to?</Text>
            <FlatList
                data={selectedItems}
                keyExtractor={item => item}
                renderItem={({item}) => <View style={styles.container}><View style={styles.items}><Text style={styles.itemText}>{item}</Text></View></View>}
            ></FlatList>
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <Text>Today? or</Text>
                <View style={styles.date} >
                <DateTimePicker value={date}/>
                </View>
            </View>
            <TouchableOpacity onPress={() => {}}>
                    <View style={{...styles.buttons, backgroundColor: '#CCCCCC'}}>
                        <Text blurOnSubmit={true} style={{fontSize: 15, fontWeight: 'bold', paddingHorizontal: 20}}>Add to calendar</Text>
                    </View>
                    </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}}>
                <View style={{...styles.buttons, backgroundColor: '#CCCCCC'}}>
                    <Text blurOnSubmit={true} style={{fontSize: 15, fontWeight: 'bold', paddingHorizontal: 20}}>Cancel</Text>
                </View>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
      },
      items:{
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 12,
        marginVertical: 6,
        width: width/1.8,
        alignItems: 'center',
    },
    itemText:{
        color: 'white',
        fontSize: 15,
        textDecorationLine: "none",
    },
    date: {
        width: 300
    },
    buttons: {
        backgroundColor: 'white',
        height: 40,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }
})
export default ConfirmWorkout;