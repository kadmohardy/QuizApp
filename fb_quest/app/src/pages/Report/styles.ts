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

export const WelcomeLabel = styled.Text`
  font-size: 24px;
  width: 200px;
  color: #262626;
  font-weight: bold;
`;
export const GeneralLabel = styled.Text`
  font-size: 14px;
  color: #262626;
  opacity: 0.7;
  font-weight: 300;
`;
export const ScoresLabel = styled.Text`
  font-size: 24px;
  color: #42cc71;
  opacity: 0.7;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 20px;

  border-width: 2px;
  border-color: #42cc71;
  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const ButtonLabel = styled.Text`
  font-size: 14px;
  color: #262626;
  opacity: 0.7;
  font-weight: 600;
`;

export const ScoresContainer = styled.View`
  flex-direction: column;
  width: 200px;
`;

export const Icon = styled.Image``;
