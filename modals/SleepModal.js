import React from 'react';
import { Text, View, ImageBackground, Modal, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/WaterModalStyles';

export default SleepModal = props => {
    
    return (
        <Modal visible = {props.visible} >
            <SafeAreaView style = {styles.container}>
                {/* Top bar */}
                <View style = {styles.header}>
                    <TouchableOpacity onPress = {props.ok}>
                        <Text style = {{fontWeight: "500", color: "white", fontSize: 22}}>Ok</Text>
                    </TouchableOpacity>
                </View>

                <ImageBackground source = {require("../images/sleep_background.png")} style = {styles.backgroundImage}>

                    {/* Goal Water */}
                    <View style = {styles.goalContainer}>
                        <TouchableOpacity
                            onPress = {props.addGoalSleep}
                        >
                            <Image source = {require("../images/up_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>

                        <Text style = {styles.waterText}>Goal: {props.goalSleep} hours</Text>

                        <TouchableOpacity
                            onPress = {props.minusGoalSleep}
                        >
                            <Image source = {require("../images/down_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Cur Water */}
                    <View style = {styles.curContainer}>
                        <TouchableOpacity
                            onPress = {props.addCurSleep}
                        >
                            <Image source = {require("../images/up_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>

                        <Text style = {styles.waterText}>   Current: {props.curSleep} hours</Text>

                        <TouchableOpacity
                            onPress = {props.minusCurSleep}
                        >
                            <Image source = {require("../images/down_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>

            </SafeAreaView>
        </Modal>
    )
}