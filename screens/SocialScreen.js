import React, { useState, useEffect, Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, FlatList, ScrollView, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {ExpandableListView} from 'react-native-expandable-listview';
import * as firebase from 'firebase';
import Fire from '../Fire';
import FriendModal from '../modals/FriendModal'


// Aim to store phone number -> for messaging someone
// Stats -> to display stats on friends list

const CONTENT = [
    {
      id: '1', // required, id of item
      categoryName: 'John Doe Level: ' + 55, // label of item expandable item
      stats: '100',
      subCategory: [{
        id: '1',
        name: 'this',
        customInnerItem: (
            <View style={{flexDirection: 'column'}}>
                <FontAwesome.Button onPress={() => SMS.sendSMSAsync(
                'Send a message to:',
                )}
            style={{ backgroundColor: '#3b5998' }}>
            Send a message!
                </FontAwesome.Button>
            </View>
            ),
            id: '1',
            name: '',
          },
          {id: '2', customInnerItem: (<Text style={{ fontSize: 18, color: 'white' }}> Display Water </Text> )},
          {id: '3', customInnerItem: (<Text style={{ fontSize: 18, color: 'white' }}> Display Sleep </Text> )},
          {id: '4', customInnerItem: (<Text style={{ fontSize: 18, color: 'white' }}> Display Excercise </Text> )},
        ],
      },

      {
        id: '2', // required, id of item
        categoryName: 'John Doe Level: ' + 55, // label of item expandable item
        stats: '100',
        subCategory: [{
          id: '1',
          name: 'this',
          customInnerItem: (
              <View style={{flexDirection: 'column'}}>
                  <FontAwesome.Button onPress={() => SMS.sendSMSAsync(
                  'Send a message to:',
                  )}
              style={{ backgroundColor: '#3b5998' }}>
              Send a message!
                  </FontAwesome.Button>
              </View>
              ),
              id: '1',
              name: '',
            },
            {id: '2', name: 'Display Water'},
            {id: '3', name: 'Display Sleep'},
            {id: '4', name: 'Display excercise'},
          ],
        },
        {
            id: '1', // required, id of item
            categoryName: 'John Doe Level: ' + 55, // label of item expandable item
            stats: '100',
            subCategory: [{
              id: '1',
              name: 'this',
              customInnerItem: (
                  <View style={{flexDirection: 'column'}}>
                      <FontAwesome.Button onPress={() => SMS.sendSMSAsync(
                      'Send a message to:',
                      )}
                  style={{ backgroundColor: '#3b5998' }}>
                  Send a message!
                      </FontAwesome.Button>
                  </View>
                  ),
                  id: '1',
                  name: '',
                },
                {id: '2', name: 'Display Water'},
                {id: '3', name: 'Display Sleep'},
                {id: '4', name: 'Display excercise'},
              ],
            },

    
  ];

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

    function handleItemClick({index}) {
        console.log(index);
    };

    function handleInnerItemClick({innerIndex, item, itemIndex}) {
        console.log(innerIndex);
    };


  renderSeparator = () => {

    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%'
        }}
      />
    )
  }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop: 120, backgroundColor: "#3b5998"}}>
            <FontAwesome5 name="user-friends" size={30} color="black" />
        
            <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 30, color: 'black' }}>Friends List ({friends.length}) </Text> 
                <Ionicons name="person-add" size={24} color="black" onPress = {()=>setFriendModalToggle(true)}/>
            </View>
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
            <Text style={{ fontSize: 18, color: 'white' }}>Remind your friends to stay healthy</Text>
            <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
            <Text style={{ fontSize: 14, color: 'white' }}>Eg: Drink more water today!</Text>
            <Text style={{ fontSize: 14, color: 'white' }}> </Text> 
            <SafeAreaView>
                <FlatList
                    data={friends}
                    renderItem={({item}) => (
                        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                            <Text>Friend: {item}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <FontAwesome.Button onPress={() => SMS.sendSMSAsync(
                                    ['6504779097'],
                                    'Drink some more water!',)}
                                style={{ backgroundColor: '#3b5998'}}>
                                    <Ionicons name="chatbubble-ellipses-outline" size={20} color="black" />
                                </FontAwesome.Button>
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
      marginTop: 8,
      padding: 8,
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%'
    },
    listItemText: {
      fontSize: 18
    }
  });