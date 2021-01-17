import firebase from 'firebase';


export default function RegisterUser(firstName, lastName, phoneNumber, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(registeredUser => {
                firebase.firestore()
                .collection('users')
                .doc(registeredUser.user.uid)
                .set({
                    uid: registeredUser.user.uid,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber, 
                    friends: {},
                })
    })
}