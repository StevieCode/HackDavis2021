import React, { useState, useEffect, Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, FlatList,  StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import Fire from '../Fire';
import FriendModal from '../modals/FriendModal'


// Level Water Sleep Excercise 



export default function SocialScreen() {

    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [friends, setFriends] = useState([]); // Initial empty array of users

    const [friendModalToggle, setFriendModalToggle] = useState(false);

    useEffect(() => {
        const user = firebase.auth().currentUser
        const subscriber = firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(queryDocumentSnapshot => {
            const friends = []
            for (var i in queryDocumentSnapshot.get('friends')){
                if (queryDocumentSnapshot.get('friends')[i] === true){
                    friends.push(i);
                }
            }  
            setFriends(friends);
            setLoading(false);
      });
      // Unsubscribe from events when no longer in use
      return () => subscriber();
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
                    data={friends}
                    renderItem={({item}) => (
                        <View style={styles.listItem}>
                            <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                                <Text style={{ fontSize: 18, color: "#556789" }}> Friend: {item}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesome.Button onPress={() => SMS.sendSMSAsync(
                                        ['6504779097'],
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
      width: '100%',
      flex: 1,
    },
    listItemText: {
      fontSize: 18
    }
  });