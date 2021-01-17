import React, { useState, useEffect, Component } from 'react';
import { Text, View, TextInput, Modal, Button  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/FriendModalStyles';
import AddFriend from '../services/AddFriend.js';
export default FriendModal = props => {
    const [friendMail, setFriendMail] = useState('');

    const friendMailInputHandler = (enteredText) => {
        setFriendMail(enteredText);
    };

    const addFriendHandler = () => {
        console.log(friendMail)
        AddFriend()
        setFriendMail('');
    }
    return (
        <Modal visible = {props.visible} >
            <SafeAreaView style = {styles.container}>
                {/* Top bar */}
                <View style = {styles.header}>
                    <TouchableOpacity onPress = {props.back}>
                        <Text style = {{fontWeight: "500", color: "white", fontSize: 22}}>Back</Text>
                    </TouchableOpacity>
                </View>

                <Text style = {{marginTop: 20, alignSelf: "center", fontSize: 32}}>Add friend</Text>

                <TextInput 
                    style = {styles.queryFriend} 
                    placeholder = "Enter your friend's email"
                    onChangeText = {friendMailInputHandler}
                    value = {friendMail}
                ></TextInput>
                <Button title="Confirm" onPress = {addFriendHandler} /> 

            </SafeAreaView>
        </Modal>
    )
}