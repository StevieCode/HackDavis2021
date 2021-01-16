import React from 'react';
import { Text, View, TextInput, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/WaterModalStyles';

export default WaterModal = props => {
    
    return (
        <Modal visible = {props.visible} >
            <SafeAreaView style = {styles.container}>

                {/* Top bar */}
                <View style = {styles.header}>
                    <TouchableOpacity onPress = {props.onCancel}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {props.ok}>
                        <Text style = {{fontWeight: "500", color: "#0277BD", fontSize: 22}}>Ok</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.inputContainer}>
                    <TextInput 
                        autoFocus = {true} 
                        multiline = {true} 
                        numberOfLines = {4} 
                        sytle = {{flex: 1}} 
                        placeholder = "Caption...">
                    </TextInput>
                </View>


            </SafeAreaView>
        </Modal>
    )
}