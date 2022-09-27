import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import SignUp from './SignUp';
import SignInInputs from './SignInInputs';

const {width, height} = Dimensions.get('window');

class Login extends React.Component{
    handleSignInRef = ref => this.signInB = ref;
    handleSignUpRef = ref => this.signUpB = ref;
    handleImgView = ref => this.imgView = ref;
    handleLoginView = ref => this.loginView = ref;
    handleInputs = ref => this.inputView = ref;
    handleSignUps = ref => this.signUps = ref;
    constructor(){
        super();
    }
    
    render(){
        return (

            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
          >
            <View style={styles.container}>
                <Animatable.View ref={this.handleImgView} style={styles.imgView}>
                    <Animatable.Image
                        animation="zoomIn"
                        duration={2000}
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    /> 
                </Animatable.View>
                <Animatable.View ref={this.handleLoginView} style={styles.loginView}>
                    <TouchableOpacity onPress={() => {this.signInB.transitionTo({opacity: 0}, 2000);
                    this.imgView.transitionTo({transform: [{translateY: -45}],borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100}, 1200);
                    this.loginView.transitionTo({transform: [{translateY: height/3}]}, 2200);
                    this.signUps.transitionTo({transform: [{translateY: height/2}]}, 100);
                    this.inputView.transitionTo({opacity: 1}, 1800, 'ease-in');

                }}>
                            <Animatable.View animation="fadeInLeft" ref={this.handleSignInRef} style={styles.buttons}>
                                <Text style={styles.text}>Sign In</Text>
                            </Animatable.View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.signUpB.transitionTo({opacity: 0}, 1800, 'ease-in');
                this.imgView.transitionTo({transform: [{translateY: -height/4}],borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100, marginTop: 100}, 2000);
                this.loginView.transitionTo({transform: [{translateY: height/3}]}, 2000);
                this.signUps.transitionTo({opacity: 1}, 2000, 'ease-in');
                }}>
                        <Animatable.View animation="fadeInRight" ref={this.handleSignUpRef} style={styles.buttons}>
                            <Text  style={styles.text}>Sign Up</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </Animatable.View>
                <Animatable.View ref={this.handleInputs} style={{height: height/3, ...StyleSheet.absoluteFill, top: null, justifyContent: 'center', zIndex: -1,
opacity: 0}}>   
                    <SignInInputs navigation={this.props.navigation}/>
                </Animatable.View>
                <Animatable.View ref={this.handleSignUps} style={{height: height/3, ...StyleSheet.absoluteFill, top: null, justifyContent: 'center', zIndex: -1,
opacity: 0, marginBottom: height/7}}>
                    <SignUp navigation={this.props.navigation}/>
                </Animatable.View>
            </View>
            </KeyboardAvoidingView>
        );
    }

}
const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: '60%',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    imgView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCCC', 
    },
    loginView: {
        height: height/3,
        justifyContent: 'center',
        backgroundColor: '#CCCCCC',

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
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputs:{
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: '#CCCCCC'
    },
})
export default Login;




