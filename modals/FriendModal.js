import React from 'react';
import { Text, View, TextInput, Modal,  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/FriendModalStyles';

export default SleepModal = props => {
    
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

                <TextInput style = {styles.queryFriend} placeholder = "Enter your friend's email">
                </TextInput>

            </SafeAreaView>
        </Modal>
    )
}