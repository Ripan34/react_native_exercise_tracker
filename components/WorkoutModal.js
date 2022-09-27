import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image, Modal, Pressable } from 'react-native';
import WorkoutList from './WorkoutList';
const {width, height} = Dimensions.get('window');

const WorkoutModal = props => {
  let selectedItems = [];

  function addItems(item){
    selectedItems.push(item)
  }
  function removeItems(item){
    selectedItems.splice(selectedItems.indexOf(item), 1);
  }
  function handleConfirm() {
    props.setModalVisible();
    props.navigation.navigate("confirm", {selectedItems: selectedItems});
  }
    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.titleText}>{props.title}</Text>
              <Text style={styles.modalText}>Choose all the workouts you are doing today</Text>
                <WorkoutList removeItems={removeItems} addItems={addItems} muscle={props.title}/>    
              <View style={{flexDirection: 'row'}}>
              <Pressable
                style={[styles.button, styles.buttonClose, {backgroundColor: 'black'}]}
                onPress={props.setModalVisible}
              >         
               <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleConfirm}
              >         
               <Text style={{...styles.textStyle, color: 'black'}}>Confirm</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 100
    },
    modalView: {
      width: width/1.1,
      height: height/1.6,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      marginRight: 20,
      backgroundColor: "#a5fe05",
      marginTop: 20
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    titleText: {
        fontSize: 30,
        marginBottom: 20
    }
  });
  
export default WorkoutModal;