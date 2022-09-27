import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const ListComponent = props => {
    const [isAdded, setIsAdded] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    let bouncyCheckboxRef = null;

    const toggleIcon = () => {
        setIsAdded(!isAdded);
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {setIsSelected(!isSelected); 
                if(!isSelected)
                    props.addItems(props.title);
                else props.removeItems(props.title)
                }}>
                <View style={!isSelected? {...styles.items}: {...styles.items, backgroundColor: "#a5fe05"}}>
                    <BouncyCheckbox 
                    size={22} iconStyle={{ borderColor: "white" }} 
                    onPress={(isChecked) => {}} 
                    text={props.title} 
                    isChecked={isSelected}
                    fillColor="black"
                    ref={(ref) => (bouncyCheckboxRef = ref)}
                    disableBuiltInState
                    textStyle={!isSelected? {...styles.itemText}: {...styles.itemText, color: 'black'}} />
                </View>
            </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
    items:{
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 12,
        marginVertical: 6,
        width: width/1.6,
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemText:{
        color: 'white',
        fontSize: 15,
        textDecorationLine: "none",
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default ListComponent;