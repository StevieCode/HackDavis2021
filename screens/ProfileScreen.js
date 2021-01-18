import React, { useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from '../styles/ProfileScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import Fire from '../Fire';

export default function LeaderBoardScreen() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    useEffect( () => {
        const user = firebase.auth().currentUser;
        const userRef = firebase.firestore().collection('users').doc(user.uid);
        userRef.get().then(function(doc) {
            typeof doc.data().firstName != undefined ? setFirstName(doc.data().firstName) : setFirstName('');
            typeof doc.data().lastName != undefined ? setLastName(doc.data().lastName) : setLastName('');
            typeof doc.data().phoneNumber != undefined ? setPhoneNumber(doc.data().phoneNumber) : setPhoneNumber('');
            typeof doc.data().email != undefined ? setEmail(doc.data().email) : setEmail('');
        });

    }, [])
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
          }
        setSelectedImage({ localUri: pickerResult.uri });
        };

        if (selectedImage !== null) {
            return (
                  <View style={styles.container}>
                    <TouchableHighlight style={[styles.profileImgContainer, { borderColor: 'white', borderWidth:3 }]}>
                        <Image source={{ uri: selectedImage.localUri }}style={styles.profileImg}/>
                        </TouchableHighlight>
                            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                                <View style= {styles.altChangeContainer}>
                                    <Ionicons name="create-outline" size={20} color="white" />
                                </View>
                            </TouchableOpacity>
                        <Text  style= {styles.fullName}> {firstName} {lastName} </Text>
                        <Text  style= {styles.regText}> {phoneNumber}</Text>
                        <Text  style= {styles.regText}> {email}</Text>
                        <TouchableOpacity
                            onPress = {() => {firebase.auth().signOut()}}
                        >
                            <Text style = {{color: "white", marginTop: "10%", fontSize: 25, fontFamily: "Chalkboard SE"}}>Log Out</Text>
                        </TouchableOpacity>
                 </View>
            );
      }
    
    return ( 
        <View style = {styles.container}>
            <Image source = {require("../images/title.png")} style = {{width: "100%", height: "55%", alignSelf: "auto", marginBottom: "-30%", marginTop: "-10%"}} />
                <Ionicons name="person-circle-outline" size={95} color="white" ></Ionicons>
                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <View style= {styles.changeContainer}>
                        <Ionicons name="create-outline" size={20} color="white" />
                    </View>
                </TouchableOpacity>
            <Text  style= {styles.fullName}> {firstName} {lastName}</Text>
            <Text  style= {styles.regText}> {phoneNumber}</Text>
            <Text  style= {styles.regText}> {email}</Text>


            <TouchableOpacity
                onPress = {() => {firebase.auth().signOut()}}
            >
                <Text style = {{color: "white", marginTop: "10%", fontSize: 25, fontFamily: "Chalkboard SE"}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    
    )
}