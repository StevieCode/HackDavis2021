import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, SafeAreaView, FlatList} from 'react-native';
import * as firebase from 'firebase';
import Fire from '../Fire';

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
            //console.log(queryDocumentSnapshot.get('friends'))   
              
            // queryDocumentSnapshot.forEach(documentSnapshot => {
            //     friends.push({
            //       ...documentSnapshot.data(),
            //       key: documentSnapshot.id,
            //     });
            //   });
        
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
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Social Page</Text>
            <SafeAreaView>
            <FlatList
                data={friends}
                keyExtractor={(item, index) => item.key}
                renderItem={({item}) => (
                    <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Friend: {item}</Text>
                    </View>
                )}
            />
            </SafeAreaView>
        </View>
    )
}