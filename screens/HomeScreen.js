import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { ImagePropTypes, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WaterModal from '../modals/WaterModal';
import UpdateWater from '../services/UpdateWater';
import * as firebase from 'firebase';
import Fire from '../Fire';

export default function HomeScreen() {

    const [curWater, setCurWater] = useState(0);
    const [goalWater, setGoalWater] = useState(0);
    const [toggleWaterModal, setToggleWaterModal] = useState(false);

    function closeWater(curWater, goalWater){
        UpdateWater(curWater, goalWater);
        setToggleWaterModal(false);
    }
    
    useEffect(() => {
        const user = firebase.auth().currentUser;
        const userRef = firebase.firestore().collection('users').doc(user.uid);
        if (toggleWaterModal === false){
            userRef.get().then(function(doc) {
                setCurWater(doc.data().water[0])
                setGoalWater(doc.data().water[1])
                console.log(doc.data().water);
            });

        }

    });

    function CurWaterHandler(change) {
        if (curWater <= 0 && change < 0) {
            console.log("Can't have less");
            return
        } else if (curWater > goalWater) {
            console.log("Too much water");
        }

        setCurWater(curWater + change)
    }

    function GoalWaterHandler(change) {
        if (goalWater <= 0 && change < 0) {
            console.log("Can't have less");
            return
        } else if (curWater > goalWater) {
            console.log("Too little water");
        }

        setGoalWater(goalWater + change)
    }


    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress = {() => setToggleWaterModal(true)}>
                    <Text>Water: {curWater} / {goalWater}</Text>
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
                    //ok = {() => setToggleWaterModal(false)}
                    curWater = {curWater}
                    goalWater = {goalWater}
                    ok = {() => {closeWater(curWater, goalWater)}}
                    addCurWater = {() => {CurWaterHandler(1)}}
                    minusCurWater = {() => {CurWaterHandler(-1)}}
                    addGoalWater = {() => {GoalWaterHandler(1)}}
                    minusGoalWater = {() => {GoalWaterHandler(-1)}}
                />
            </View>
        )
}
