import firebase from 'firebase'

var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: ''
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersTweetsExpirationTime = 100000
export const userExpirationTime = 100000
export const repliesExpirationTime = 300000
