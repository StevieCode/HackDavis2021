import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { ImagePropTypes, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SleepModal from '../modals/SleepModal';
import WaterModal from '../modals/WaterModal';
import ExerciseModal from '../modals/ExerciseModal';
import styles from '../styles/HomeScreenStyles'

import UpdateWater from '../services/UpdateWater';
import * as firebase from 'firebase';
import Fire from '../Fire';
import UpdateExercise from '../services/UpdateExercise';
import UpdateSleep from '../services/UpdateSleep';

export default function HomeScreen() {

    const [curWater, setCurWater] = useState(0);
    const [goalWater, setGoalWater] = useState(0);
    const [toggleWaterModal, setToggleWaterModal] = useState(false);
     
    const [curSleep, setCurSleep] = useState(0);
    const [goalSleep, setGoalSleep] = useState(0);
    const [toggleSleepModal, setToggleSleepModal] = useState(false);

    const [curExercise, setCurExercise] = useState(0);
    const [goalExercise, setGoalExercise] = useState(0);
    const [toggleExerciseModal, setToggleExerciseModal] = useState(false);

    
    useEffect(() => {
        const user = firebase.auth().currentUser;
        const userRef = firebase.firestore().collection('users').doc(user.uid);
        if (toggleWaterModal === false){
            userRef.get().then(function(doc) {
                setCurWater(doc.data().water[0])
                setGoalWater(doc.data().water[1])
            });
        }
        if (toggleSleepModal === false){
            userRef.get().then(function(doc) {
                setCurSleep(doc.data().sleep[0])
                setGoalSleep(doc.data().sleep[1])
            });
        }
        if (toggleExerciseModal === false){
            userRef.get().then(function(doc) {
                setCurExercise(doc.data().exercise[0])
                setGoalExercise(doc.data().exercise[1])
            });
        }


    });
  
    function closeWaterHandler(curWater, goalWater){
        UpdateWater(curWater, goalWater);
        setToggleWaterModal(false);
    }

    function closeExerciseHandler(curExercise, goalExercise){
        UpdateExercise(curExercise, goalExercise);
        setToggleExerciseModal(false);
    }

    function closeSleepHandler(curSleep, goalSleep){
        UpdateSleep(curSleep, goalSleep);
        setToggleSleepModal(false);
    }

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

    function CurSleepHandler(change) {
        if (curSleep <= 0 && change < 0) {
            console.log("Can't have less");
            return
        } else if (curSleep > goalSleep) {
            console.log("Too much sleep")
        }

        setCurSleep(curSleep + change)
    }

    function GoalSleepHandler(change) {
        if (goalSleep <= 0 && change < 0) {
            console.log("Can't have less");
            return
        } else if (curSleep > goalSleep) {
            console.log("Too little sleep");
        }

        setGoalSleep(goalSleep + change)
    }

    function CurExerciseHandler(change) {
        if (curExercise <= 0 && change < 0) {
            console.log("Can't have less");
            return
        } else if (curExercise > goalExercise) {
            console.log("Too much exercise");
        }

        setCurExercise(curExercise + change);
    }

    function GoalExerciseHandler(change) {
        if (goalExercise <= 0 && change < 0) {
            console.log("Can't have less");
            return
        } else if (curExercise > goalExercise) {
            console.log("Too little exercise")
        }

        setGoalExercise(goalExercise + change)
    }


    return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {() => setToggleWaterModal(true)}>
                    <Text>Water: {curWater} / {goalWater}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => setToggleSleepModal(true)}>
                    <Text>Sleep: {curSleep} / {goalSleep} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => setToggleExerciseModal(true)}>
                    <Text>Exercise: {curExercise} / {goalExercise} </Text>
                </TouchableOpacity>

                <WaterModal
                    visible = {toggleWaterModal}
                    curWater = {curWater}
                    goalWater = {goalWater}
                    closeWater = {() => {closeWaterHandler(curWater, goalWater)}}
                    addCurWater = {() => {CurWaterHandler(1)}}
                    minusCurWater = {() => {CurWaterHandler(-1)}}
                    addGoalWater = {() => {GoalWaterHandler(1)}}
                    minusGoalWater = {() => {GoalWaterHandler(-1)}}
                />

                <SleepModal
                    visible = {toggleSleepModal}
                    closeSleep = {() => closeSleepHandler(curSleep, goalSleep)}
                    curSleep = {curSleep}
                    goalSleep = {goalSleep}
                    addCurSleep = {() => {CurSleepHandler(1)}}
                    minusCurSleep = {() => {CurSleepHandler(-1)}}
                    addGoalSleep= {() => {GoalSleepHandler(1)}}
                    minusGoalSleep = {() => {GoalSleepHandler(-1)}}
                />

                <ExerciseModal
                    visible = {toggleExerciseModal}
                    closeExercise = {() => closeExerciseHandler(curExercise, goalExercise)}
                    curExercise = {curExercise}
                    goalExercise = {goalExercise}
                    addCurExercise = {() => CurExerciseHandler(10)}
                    minusCurExercise = {() => CurExerciseHandler(-10)}
                    addGoalExercise = {() => GoalExerciseHandler(10)}
                    minusGoalExercise = {() => GoalExerciseHandler(-10)}
                />

            </View>
        )
}
