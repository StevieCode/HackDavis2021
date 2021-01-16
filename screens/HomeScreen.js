import React, { useState } from 'react';
import { render } from 'react-dom';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WaterModal from '../modals/WaterModal';

export default function HomeScreen() {

    const [curWater, setCurWarer] = useState(0);
    const [goalWater, setGoalWater] = useState(0);
    const [toggleWaterModal, setToggleWaterModal] = useState(false);




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
                />
            </View>
        )
}
