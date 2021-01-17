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

                <Text style = {styles.title}>Water Intake</Text>

                <Text style = {styles.goal}>Goal: {props.goalWater} cups/day</Text>

                <Text style = {styles.current}>Current: {props.curWater} cups</Text>

                <TouchableOpacity
                    onPress = {props.addCurWater}
                >
                    <Text style = {styles.updateCurButton}>Add Cur Water</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {props.minusCurWater}
                >
                    <Text style = {styles.updateCurButton}>Minus Cur Water</Text>
                </TouchableOpacity>




            </SafeAreaView>
        </Modal>
    )
}