import firebase from 'firebase';

export default function HandleLogin(phoneNumber, password) {
    firebase
        .auth()
        .signInWithEmailAndPassword(phoneNumber, password)
        .catch(error => this.setState({errorMessage: error.message}));
}