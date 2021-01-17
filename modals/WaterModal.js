import React from 'react';
import { Text, View, ImageBackground, Modal, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/WaterModalStyles';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';
import Fire from '../Fire';


export default WaterModal = props => {
    
    return (
        <Modal visible = {props.visible} >
            <SafeAreaView style = {styles.container}>
                {/* Top bar */}
                <View style = {styles.header}>
                    <TouchableOpacity onPress = {props.ok}>
                        <Text style = {{fontWeight: "500", color: "white", fontSize: 22}}>Ok</Text>
                    </TouchableOpacity>
                </View>

                <ImageBackground source = {require("../images/water_background.png")} style = {styles.backgroundImage}>

                    {/* Goal Water */}
                    <View style = {styles.goalContainer}>
                        <TouchableOpacity
                            onPress = {props.addGoalWater}
                        >
                            <Image source = {require("../images/up_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>

                        <Text style = {styles.waterText}>Goal: {props.goalWater} cups</Text>

                        <TouchableOpacity
                            onPress = {props.minusGoalWater}
                        >
                            <Image source = {require("../images/down_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Cur Water */}
                    <View style = {styles.curContainer}>
                        <TouchableOpacity
                            onPress = {props.addCurWater}
                        >
                            <Image source = {require("../images/up_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>

                        <Text style = {styles.waterText}>   Current: {props.curWater} cups</Text>

                        <TouchableOpacity
                            onPress = {props.minusCurWater}
                        >
                            <Image source = {require("../images/down_arrow.png")} style = {styles.arrow}></Image>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>

            </SafeAreaView>
        </Modal>
    )
}