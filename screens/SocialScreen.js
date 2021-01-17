import React, { useState, useEffect, Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, FlatList,  StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import Fire from '../Fire';
import FriendModal from '../modals/FriendModal'


// Aim to store phone number -> for messaging someone
// Stats -> to display stats on friends list
export default function SocialScreen() {

    const [loading, setLoading] = useState(true); 
    const [friends, setFriends] = useState([]); 
    const [friendInfo, setFriendInfo] = useState([]); //

    const [friendModalToggle, setFriendModalToggle] = useState(false);

    useEffect(() => {
        const user = firebase.auth().currentUser
        const subscriber = firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(queryDocumentSnapshot => {
            const friends = []
            const friendInfo = []
            for (var i in queryDocumentSnapshot.get('friends')){
                friends.push(queryDocumentSnapshot.get('friends')[i])
            }
        setFriends(friends);
        const all_users = firebase.firestore().collection('users').get()
        .then(userSnapshot => {
            userSnapshot.forEach(userDoc => {
                // console.log('_______')
                // console.log(['3', '4'].includes('3'))
                // console.log(userDoc.data().uid);
                // console.log(friends);
                // console.log(friends.includes(userDoc.data().uid));
                if (friends.includes(userDoc.data().uid)){
                    friendInfo.push(userDoc.data())
                }
            })
        setFriendInfo(friendInfo);
        })
        })
        setLoading(false);
        
    }, []);
      

  if (loading) {
      return <ActivityIndicator />;
  }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop: 120, backgroundColor: "#556789"}}>
            <FontAwesome5 name="user-friends" size={30} color="#556789" />
            <View style={{flexDirection: 'row'}}>
                <Text style={{  fontSize: 30, color: "#556789" }}>Friends List ({friends.length}) </Text> 
                <Ionicons  name="person-add" size={24} color= "#556789" onPress = {() => setFriendModalToggle(true)}/>


            </View>
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
            <Text style={{ fontSize: 18, color: 'white' }}>Remind your friends to stay healthy!</Text>
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 

            <SafeAreaView>
                <FlatList
                    data={friendInfo}
                    //keyExtractor={(item, index) => item.key} // Need to revisit
                    renderItem={({item}) => (
                        <View style={styles.listItem}>
                            <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                                <Text style={{ fontSize: 18, color: "#556789" }}> {item.firstName} {item.lastName}</Text>
                                <Text style={{ fontSize: 12, color: "#556789" }}> Water: {false ? item.water[0]: '0'} / {false ? item.water[1]: '0'}  </Text>
                                <Text style={{ fontSize: 12, color: "#556789" }}> Sleep: {false ? item.sleep[0]: '0'} / {false ? item.sleep[1]: '0'}  </Text>
                                <Text style={{ fontSize: 12, color: "#556789" }}> Exercise: {false ? item.exercise[0]: '0'} / {false ? item.exercise[1]: '0'}  </Text>
                                <View style={{flexDirection: 'row'}}>
                                    {/* typeof item.water[0] === 'undefined */}
                                    <FontAwesome.Button onPress={() => SMS.sendSMSAsync(
                                        [item.phoneNumber],
                                        'Drink some more water!',)}
                                    style={{ backgroundColor: 'white', flexDirection: "row"}}>
                                        <Ionicons name="chatbubble-ellipses-outline" size={20} color="black" />
                                    </FontAwesome.Button>
                                </View> 

                            </View>

                            
                        </View>

                    )}
                />

           
            </SafeAreaView>

            <FriendModal 
                visible = {friendModalToggle}
                back = {() => setFriendModalToggle(false)}
                addFriend = {() => addFriendHandler}
            />
            
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      color: '#101010',
      marginTop: 60,
      fontWeight: '700'
    },
    listItem: {
      marginTop: 9,
      padding: 8,
      borderRadius: 50,
      alignItems: 'center',
      backgroundColor: 'white',
      width: 400,
    },
    listItemText: {
      fontSize: 18
    }
  });