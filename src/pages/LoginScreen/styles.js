import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f5f7;
`;

export const ViewCircle = styled.View.attrs({
  borderRadius: 500 / 2,
})`
  width: 500;
  height: 500;
  background-color: #fff;
  position: absolute;
  left: -120;
  top: -20;
`;

export const Contain = styled.View`
  margin-top: 64;
`;

export const Image = styled.Image`
  width: 100;
  height: 100;
  align-self: center;
`;

export const Form = styled.View.attrs({
  paddingHorizontal: 32,
})``;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 30;
  color: #514e5a;
  margin-top: 32;
`;

export const Input = styled.TextInput.attrs({
  paddingHorizontal: 16,
})`
  margin-top: 32;
  height: 50;
  border-color: #bab7c3;
  border-radius: 30;
  border-width: 1;
  color: #514e5a;
  font-weight: bold;
`;

export const ViewButton = styled.View`
  align-items: flex-end;
  margin-top: 64;
`;

export const ButtonContinue = styled.TouchableOpacity.attrs({})`
  width: 70;
  height: 70;
  background-color: #9075e3;
  align-items: center;
  justify-content: center;
  border-radius: 35;
`;
