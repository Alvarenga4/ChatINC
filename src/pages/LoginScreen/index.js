import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
  Container,
  ViewCircle,
  Contain,
  Image,
  Form,
  Label,
  Input,
  ViewButton,
  ButtonContinue,
} from './styles';

export default class LoginScreen extends React.Component {
  state = {
    name: '',
  };

  continue = () => {
    this.props.navigation.navigate('Chat', {name: this.state.name});
  };
  render() {
    return (
      <Container>
        <ViewCircle />
        <Contain>
          <Image source={require('../../assets/chat.png')} />
        </Contain>
        <Form>
          <Label>Username</Label>
          <Input
            placeholder="Type your username here"
            onChangeText={(name) => {
              this.setState({name});
            }}
            value={this.state.name}
          />
          <ViewButton>
            <ButtonContinue onPress={this.continue}>
              <Icon name="arrow-right" color={'#fff'} size={24} />
            </ButtonContinue>
          </ViewButton>
        </Form>
      </Container>
    );
  }
}
