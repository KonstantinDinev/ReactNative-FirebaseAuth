import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDZnoodZ1p-9fNKYrz90K-3-RVGtCzbMvU',
      authDomain: 'react-native-auth-68728.firebaseapp.com',
      databaseURL: 'https://react-native-auth-68728.firebaseio.com',
      projectId: 'react-native-auth-68728',
      storageBucket: 'react-native-auth-68728.appspot.com',
      messagingSenderId: '399207254435',
      appId: '1:399207254435:web:c15126fda1323f5d'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ height: 140 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
