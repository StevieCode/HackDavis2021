import firebase from 'firebase';

export default function HandleLogin(email, password) {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        //.catch(error => error.message);
        .catch(console.error(error))
}
