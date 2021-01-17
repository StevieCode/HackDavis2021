import React, { useState } from 'react';
import { render } from 'react-dom';
import { ImagePropTypes, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WaterModal from '../modals/WaterModal';

export default function HomeScreen() {

    const [curWater, setCurWater] = useState(0);
    const [goalWater, setGoalWater] = useState(0);
    const [toggleWaterModal, setToggleWaterModal] = useState(false);

    function CurWaterHandler(change) {
        if (curWater <= 0 && change < 0) {
            console.log("Can't have less");
            return
        } else if (curWater > goalWater) {
            console.log("Too much water");
        }

        setCurWater(curWater + change)
    }


    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress = {() => setToggleWaterModal(true)}>
                    <Text>Water: {curWater}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                >
                    <Text>Sleep</Text>
                </TouchableOpacity>

                <TouchableOpacity
                >
                    <Text>Exercise</Text>
                </TouchableOpacity>


                <WaterModal
                    visible = {toggleWaterModal}
                    onCancel = {() => setToggleWaterModal(false)}
                    ok = {() => console.log("HELLo")}
                    curWater = {curWater}
                    goalWater = {goalWater}
                    addCurWater = {() => {CurWaterHandler(1)}}
                    minusCurWater = {() => {CurWaterHandler(-1)}}
                    updateGoalWater = {() => {UpdateGoalWater}}
                />
            </View>
        )
}
