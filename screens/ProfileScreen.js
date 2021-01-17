import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function LeaderBoardScreen() {
    return (
        
        <View style={{ flex: 1, alignItems: 'center' , marginTop: 85, backgroundColor: "#556789"}}>
            <View><Text  style={{ fontSize: 25, color: "white" }}>WHAT THE HEALTH</Text></View>
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
            <Text style={{ fontSize: 18, color: 'white' }}> </Text>
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
            <Text style={{ fontSize: 18, color: 'white' }}> </Text>
            <Ionicons name="person-circle-outline"  size={95} color="white" ></Ionicons>
            <Text  style={{ fontSize: 25, color: 'white' }}>John Doe</Text>
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
            <Text  style={{ fontSize: 15, color: 'white' }}>1(650)223-2932</Text>
            <Text  style={{ fontSize: 15, color: 'white' }}>JohnDoe22@gmail.com</Text>
        </View>
    )
}