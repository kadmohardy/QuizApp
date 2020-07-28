import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  margin-top: 25px;
`;

export const WelcomeText = styled.Text`
  color: #262626;
  font-weight: 500;
  font-size: 16px;
`;

export const QuestionText = styled.Text`
  color: #262626;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #42cc71;
  border-radius: 20px;

  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
`;

export const QuestionsNumberPicker = styled.Picker``;

export const PickButton = styled(RectButton)``;
