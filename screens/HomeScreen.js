import React, { useState } from 'react';
import { render } from 'react-dom';
import { ImagePropTypes, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SleepModal from '../modals/SleepModal';
import WaterModal from '../modals/WaterModal';
import ExerciseModal from '../modals/ExerciseModal';

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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress = {() => setToggleWaterModal(true)}>
                    <Text>Water: {curWater}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => setToggleSleepModal(true)}>
                    <Text>Sleep</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => setToggleExerciseModal(true)}>
                    <Text>Exercise</Text>
                </TouchableOpacity>

                <WaterModal
                    visible = {toggleWaterModal}
                    ok = {() => setToggleWaterModal(false)}
                    curWater = {curWater}
                    goalWater = {goalWater}
                    addCurWater = {() => {CurWaterHandler(1)}}
                    minusCurWater = {() => {CurWaterHandler(-1)}}
                    addGoalWater = {() => {GoalWaterHandler(1)}}
                    minusGoalWater = {() => {GoalWaterHandler(-1)}}
                />

                <SleepModal
                    visible = {toggleSleepModal}
                    ok = {() => setToggleSleepModal(false)}
                    curSleep = {curSleep}
                    goalSleep = {goalSleep}
                    addCurSleep = {() => {CurSleepHandler(1)}}
                    minusCurSleep = {() => {CurSleepHandler(-1)}}
                    addGoalSleep= {() => {GoalSleepHandler(1)}}
                    minusGoalSleep = {() => {GoalSleepHandler(-1)}}
                />

                <ExerciseModal
                    visible = {toggleExerciseModal}
                    ok = {() => setToggleExerciseModal(false)}
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
