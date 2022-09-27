import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SignUp = props => {
    return(
        <View>
            <TextInput style={styles.inputs}  placeholder='Name'/>
            <TextInput style={styles.inputs} keyboardType="email-address" placeholder='Email'/>
            <TextInput style={styles.inputs}  keyboardType="number-pad" placeholder='Age'/>
            <TextInput style={styles.inputs} secureTextEntry={true} placeholder='Password'/>
            <TextInput style={styles.inputs} secureTextEntry={true} placeholder='Re-enter Password'/>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <Animatable.View style={{...styles.buttons, backgroundColor: '#CCCCCC'}}>
                        <Text blurOnSubmit={true} style={{fontSize: 20, fontWeight: 'bold'}}>Sign Up</Text>
                    </Animatable.View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    inputs:{
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: '#CCCCCC'
    },
    buttons: {
        backgroundColor: 'white',
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
});
export default SignUp;