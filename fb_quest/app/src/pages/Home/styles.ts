import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background: #ffffff;
  padding: 15px;
`;

export const WelcomeText = styled.Text`
  margin-top: 48px;
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  opacity: 0.85;
`;

export const WelcomeSubText = styled.Text`
  margin-top: 5px;
  color: #000000;
  font-weight: 500;
  font-size: 24px;
  opacity: 0.65;
`;

export const QuestionText = styled.Text`
  color: #262626;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
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

export const PickerButton = styled.TouchableOpacity``;

export const PickerContainer = styled.View`
  width: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom-width: 0.5px;
  border: rgba(0, 0, 0, 0.125);
  border-width: 0;
`;

export const PickerContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PickerButtonContainerRight = styled.View``;

export const QuestionsNumber = styled.Text`
  color: #2f94d9;
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`;

export const QuestionsLabel = styled.Text``;

export const Section = styled.View`
  align-items: flex-start;
  justify-content: space-around;
  padding: 15px 0px;
`;

export const SectionTitle = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 24px;
`;
