import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
    apiKey: "AIzaSyD0C2RfNW0JiZlB3rxJmf8yOsoQEMwFf9M",
    authDomain: "dinder-d4096.firebaseapp.com",
    databaseURL: "https://dinder-d4096.firebaseio.com",
    projectId: "dinder-d4096",
    storageBucket: "dinder-d4096.appspot.com",
    messagingSenderId: "862535419876"
  };

export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 5000
    this.splashImg = require('../../images/splash.jpg')
  }
  get SplashTime () {
    return this.splashTime
  }

  get SplashImg() {
    return this.splashImg
  }
}
