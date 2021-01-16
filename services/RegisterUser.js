import firebase from 'firebase';

export default function RegisterUser(phoneNumber, firstName, lastName, password) {
    firebase.auth().createUserWith(phoneNumber, password)
            .then(registeredUser => {
                firebase.firestore()
                .collection('users')
                .doc(registeredUser.user.uid)
                .set({
                    uid: registeredUser.user.uid,
                    firstName: firstName,
                    lastName: lastName,
                })
    })
}