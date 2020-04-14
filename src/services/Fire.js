/* eslint-disable prettier/prettier */
import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBiS2a_NS_NnsoQoLAXqKv2ps8oAqmsyG8',
        authDomain: 'chatteste-b77ec.firebaseapp.com',
        databaseURL: 'https://chatteste-b77ec.firebaseio.com',
        projectId: 'chatteste-b77ec',
        storageBucket: 'chatteste-b77ec.appspot.com',
        messagingSenderId: '1022814305693',
        appId: '1:1022814305693:web:a07edd23f8b4e072cdc374',
        measurementId: 'G-TR8BLRQR06',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
