import firebase from 'firebase';


export default function AddFriend(email){
    const user = firebase.auth().currentUser;
    const userRef = firebase.firestore().collection('users').doc(user.uid)
    const all_users = firebase.firestore().collection('users').get()
    .then(userSnapshot => {
        userSnapshot.forEach(userDoc => {
            if (userDoc.data().email === email){
                //userDoc.data().friends.push(user.uid);
                userRef.update({
                    friends: firebase.firestore.FieldValue.arrayUnion(userDoc.data().uid)
                    //friends: 'moose'
                })
            } else {
                // console.log("Nope")
                // console.log(email)
                // console.log(userDoc.data().email);
            }
        })
    })
    .catch((error) =>  {
        console.log("Error getting documents: ", error);
    });
}