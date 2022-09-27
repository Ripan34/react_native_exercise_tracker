import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from '../constants/workoutsData'
import ListComponent from './ListComponent';

const WorkoutList = props => {
    return(
            <FlatList
                data={data[props.muscle]}
                renderItem={({item}) => <ListComponent removeItems={props.removeItems} addItems={props.addItems} title={item.key}/>}
            ></FlatList>
    );
};
const styles = StyleSheet.create({

})
export default WorkoutList;