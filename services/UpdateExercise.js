import firebase from 'firebase';


export default function UpdateExercise(cur, goal){
    const user = firebase.auth().currentUser;
    const userdoc = firebase.firestore().collection('users').doc(user.uid);
    userdoc.update({
        exercise: [cur,goal]
    })
}