// import React, { useState, useEffect } from 'react';
// import { Text, View, ActivityIndicator, SafeAreaView, FlatList} from 'react-native';
// import * as firebase from 'firebase';
// import Fire from '../Fire';

// export default function SocialScreen() {
//     const [loading, setLoading] = useState(true); // Set loading to true on component mount
//     const [friends, setFriends] = useState([]); // Initial empty array of users

//     useEffect(() => {
//         const user = firebase.auth().currentUser
//         const subscriber = firebase.firestore()
//         .collection('users')
//         .doc(user.uid)
//         .onSnapshot(queryDocumentSnapshot => {
//             const friends = []
//             for (var i in queryDocumentSnapshot.get('friends')){
//                 if (queryDocumentSnapshot.get('friends')[i] === true){
//                     friends.push(i);
//                 }
//             }          
//               setFriends(friends);
//               console.log(friends);
//               setLoading(false);
//         });

//         // Unsubscribe from events when no longer in use
//         return () => subscriber();
//     }, []);

//     if (loading) {
//         return <ActivityIndicator />;
//     }
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Social Page</Text>
//             <SafeAreaView>
//             <FlatList
//                 data={friends}
//                 keyExtractor={(item, index) => item.key}
//                 renderItem={({item}) => (
//                     <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                         <Text>Friend: {item}</Text>
//                     </View>
//                 )}
//             />
//             </SafeAreaView>
//         </View>
//     )
// }

import React, { useState, useEffect, Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, FlatList, ScrollView } from 'react-native';
import * as SMS from 'expo-sms';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {ExpandableListView} from 'react-native-expandable-listview';
import * as firebase from 'firebase';
import Fire from '../Fire';



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
            console.log(friends);
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




    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop: 150, backgroundColor: "#3b5998"}}>
        <FontAwesome5 name="user-friends" size={30} color="black" />
        <Text style={{ fontSize: 30, color: 'black' }}>Friends List ({friends.length}) </Text>  
        
        <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
        <Text style={{ fontSize: 18, color: 'white' }}>Remind your friends to stay healthy</Text>
        <Text style={{ fontSize: 18, color: 'white' }}> </Text> 
        <Text style={{ fontSize: 14, color: 'white' }}>Eg: Drink more water today!</Text>
        <Text style={{ fontSize: 14, color: 'white' }}> </Text> 
        <SafeAreaView>
            <FlatList
                data={friends}
                renderItem={({item}) => (
                    <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Friend: {item}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
        
        {/* <ExpandableListView
            //ExpandableListViewStyles={{borderTopWidth:10}} // styles to expandable listview
            renderInnerItemSeparator={true} // true or false, render separator between inner items
            renderItemSeparator={true} // true or false, render separator between Items
            //itemContainerStyle={{color:'white'}} // add your styles to all item container of your list
            //itemLabelStyle={{color:'white'}} // add your styles to all item text of your list
            // customChevron={{}} // your custom image to the indicator
            // chevronColor="white" // color of the default indicator
            //innerItemContainerStyle={{color:'white'}} // add your styles to all inner item containers of your list
            //itemLabelStyle={{color:'white'}} // add your styles to all inner item text of your list
            // itemImageIndicatorStyle={{}} // add your styles to the image indicator of your list
            // animated={true} // sets all animations on/off, default on
            // defaultLoaderStyles?: ViewStyle; // Set your styles to default loader (only for animated={true})
            // customLoader?: JSX.Element; Pass your custom loader, while your content is measured and rendered (only for animated={true})
            data={CONTENT} 
            onInnerItemClick={handleInnerItemClick}
            onItemClick={handleItemClick}
        /> */}
        </View>
    );
};
