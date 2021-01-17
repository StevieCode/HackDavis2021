import firebase from 'firebase';


export default function AddFriend(email){
    const user = firebase.auth().currentUser;
    const userdoc = firebase.firestore().collection('users')
}