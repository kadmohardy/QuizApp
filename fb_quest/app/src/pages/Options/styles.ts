import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';
import {ScreenWidth} from '../../utils/ScreenHelper';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 25px;
  padding: 5px;
`;

export const ContainerScrollable = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'flex-start',
  },
}))`
  width: ${ScreenWidth}px;
  padding-bottom: 130px;
  margin-top: 25px;
  padding: 0px 10px;
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

export const QuestionNumber = styled.Text`
  margin-top: 50px;
  font-size: 14px;
  color: #262626;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const Title = styled.Text`
  margin-left: 5px;
  margin-top: 50px;
  font-size: 14px;
  color: #262626;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const TabBarButton = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  margin-left: 15px;
`;

export const TabBarCenter = styled.View`
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;

export const TabBarTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #42cc71;
`;

export const TabBarButtonText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #1e66ab;
  margin-top: 10px;
`;

export const Timer = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #262626;
  margin-top: 10px;
`;

export const BottomTabBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BottomTabBarButton = styled.TouchableOpacity`
  margin-top: 5px;
  align-items: center;
  margin: 5px;
`;

export const OptionContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`;

interface OptionButtonProps {
  checked: boolean;
}

export const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  border-radius: 4px;
  padding: 8px 12px;
  border-color: ${(props: OptionButtonProps) =>
    props.checked ? '#000' : 'rgba(0, 0, 0, .7)'};
  border-width: ${(props: OptionButtonProps) => (props.checked ? 2 : 1)}px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
`;

export const OptionsContainer = styled.View`
  width: ${ScreenWidth - 20}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const OptionLabelContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 18px;

  height: 28px;
  width: 28px;

  margin-right: 14px;

  border-color: ${(props: OptionButtonProps) =>
    props.checked ? 'rgba(0, 0, 0,1)' : 'transparent'};
  border-width: ${(props: OptionButtonProps) => (props.checked ? 2 : 1)}px;
`;

export const OptionLabel = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;

interface StatusContainerProps {
  correct: boolean;
}
export const StatusContainer = styled.View`
  background: ${(props: StatusContainerProps) =>
    props.correct ? '#42cc71' : 'red'};
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin-left: -10px;
  margin-top: -10px;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;

  width: ${ScreenWidth - 80}px;
`;

interface AnswerStatus {
  correct: boolean;
}
export const AnswerStatus = styled.View`
  background: ${(props: AnswerStatus) => (props.correct ? '#42cc71' : 'red')};
  height: 40px;
  width: ${ScreenWidth}px;
  margin-top: 25px;

  align-items: center;
  justify-content: center;
`;

export const AnswerLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
