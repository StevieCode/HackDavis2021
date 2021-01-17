import React from 'react';
import { Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from '../styles/ProfileScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function LeaderBoardScreen() {
    const [selectedImage, setSelectedImage] = React.useState(null);

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
                    <Text  style= {styles.header}>WHAT THE HEALTH</Text>
                    <TouchableHighlight style={[styles.profileImgContainer, { borderColor: 'white', borderWidth:3 }]}>
                        <Image source={{ uri: selectedImage.localUri }}style={styles.profileImg}/>
                        </TouchableHighlight>
                            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                                <View style= {styles.altChangeContainer}>
                                    <Ionicons name="create-outline" size={20} color="white" />
                                </View>
                            </TouchableOpacity>
                        <Text  style= {styles.fullName}> John Doe</Text>
                        <Text  style= {styles.regText}> 1(650)223-2932</Text>
                        <Text  style= {styles.regText}> JohnDoe22@gmail.com</Text>
                 </View>
            );
      }
    
    return ( 
        <View style = {styles.container}>
            <Text  style= {styles.header}>WHAT THE HEALTH</Text>
                <Ionicons name="person-circle-outline" size={95} color="white" ></Ionicons>
                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <View style= {styles.changeContainer}>
                        <Ionicons name="create-outline" size={20} color="white" />
                    </View>
                </TouchableOpacity>
            <Text  style= {styles.fullName}> John Doe</Text>
            <Text  style= {styles.regText}> 1(650)223-2932</Text>
            <Text  style= {styles.regText}> JohnDoe22@gmail.com</Text>
        </View>
    
    )
}