import React from 'react';
import {Platorm, SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../../services/Fire';

import {Avoid} from './styles';

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
  };

  get user() {
    return {
      _id: Fire.uid,
      name: this.props.navigation.state.params.name,
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      })),
    );
  }

  componentWillUnmount() {
    Fire.off();
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    );

    <Avoid behavior="padding" keyboardVerticalOffset={30} enabled>
      {chat}
    </Avoid>;

    return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
  }
}
