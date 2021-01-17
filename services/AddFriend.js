import firebase from 'firebase';


export default function AddFriend(email){
    const user = firebase.auth().currentUser;
    const all_users = firebase.firestore().collection('users').get()
    .then(userSnapshot => {
        userSnapshot.forEach(userDoc => {
            if (userDoc.data().email === email){
                console.log(userDoc.data().uid);
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