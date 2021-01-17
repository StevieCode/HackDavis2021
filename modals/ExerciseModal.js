import React from 'react';
import { Text, View, ImageBackground, Modal, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/WaterModalStyles';

export default ExerciseModal = props => {
    
    return (
        <Modal visible = {props.visible} >
            <SafeAreaView style = {styles.container}>
                {/* Top bar */}
                <View style = {styles.header}>
                    <TouchableOpacity onPress = {props.ok}>
                        <Text style = {{fontWeight: "500", color: "white", fontSize: 22}}>Ok</Text>
                    </TouchableOpacity>
                </View>

                <ImageBackground source = {require("../images/exercise_background.png")} style = {styles.backgroundImage}>

                    {/* Goal Water */}
                    <View style = {styles.goalContainer}>
                        <TouchableOpacity
                            onPress = {props.addGoalExercise}
                        >
                            <Image source = {require("../images/up_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>

                        <Text style = {styles.waterText}>Goal: {props.goalExercise} minutes</Text>

                        <TouchableOpacity
                            onPress = {props.minusGoalExercise}
                        >
                            <Image source = {require("../images/down_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Cur Water */}
                    <View style = {styles.curContainer}>
                        <TouchableOpacity
                            onPress = {props.addCurExercise}
                        >
                            <Image source = {require("../images/up_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>

                        <Text style = {styles.waterText}>   Current: {props.curExercise} minutes</Text>

                        <TouchableOpacity
                            onPress = {props.minusCurExercise}
                        >
                            <Image source = {require("../images/down_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>

            </SafeAreaView>
        </Modal>
    )
}