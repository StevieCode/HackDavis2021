import firebase from 'firebase';


export default function UpdateWater(cur, goal){
    const user = firebase.auth().currentUser;
    const userdoc = firebase.firestore().collection('users').doc(user.uid);
    userdoc.update({
        water: [cur,goal]
    })
    
    
}