import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import WorkoutModal from './WorkoutModal';
const {width, height} = Dimensions.get('window');

const AddWorkout = props => {
  const [modalVisible, setVisible] = useState(false);
  const [title, setTitle] = useState(" ");
  function closeModal(){
    setVisible(false);
  }
    return (
        <View style={styles.container}>
         <WorkoutModal navigation={props.navigation} modalVisible={modalVisible} setModalVisible={closeModal} title={title}/>
            <Animatable.View  animation="fadeInLeft"  duration={1600} style={{marginTop: height/7, marginBottom: 40}}>
              <Text style={styles.welcomeText}>What you hitting today?</Text>
            </Animatable.View>
              <View style={styles.workouts}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => {setVisible(true); setTitle("Chest")}}>
                    <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image resizeMode='contain' style={styles.pngs} source={require('../assets/chest.png')}/>
                    <Text style={styles.exercises}>Chest</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {setVisible(true); setTitle("Back")}}>
                    <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image resizeMode='contain' style={styles.pngs} source={require('../assets/back.gif')}/>
                    <Text style={styles.exercises}>Back</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => {setVisible(true); setTitle("Shoulder")}}>
                    <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image resizeMode='contain' style={styles.pngs} source={require('../assets/shoulder.png')}/>
                    <Text style={styles.exercises}>Shoulder</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {setVisible(true); setTitle("Arms")}}>
                    <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image resizeMode='contain' style={styles.pngs} source={require('../assets/arms.png')}/>
                    <Text style={styles.exercises}>Arms</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => {setVisible(true); setTitle("Legs")}}>
                    <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image resizeMode='contain' style={styles.pngs} source={require('../assets/legs.png')}/>
                    <Text style={styles.exercises}>Legs</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {setVisible(true); setTitle("Cardio")}}>
                    <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image resizeMode='contain' style={styles.pngs} source={require('../assets/cardio.png')}/>
                    <Text style={styles.exercises}>Cardio</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>     
        </View>
    );
};
export default AddWorkout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    textAdd: {
      marginVertical: 15
    },
    welcomeText: {
      fontSize: 45,
      fontFamily: 'American Typewriter'
    },
    workouts: {
      height: height/2,
      width: width,
      justifyContent: 'space-around',
      alignItems: 'center'
      },
      exercises: {
        fontSize: 20,
      },
      pngs: {
        width: 110,
        height: 100,
      }
  });