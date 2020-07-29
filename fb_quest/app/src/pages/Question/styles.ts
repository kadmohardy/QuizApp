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
  padding: 15px;
`;

export const ContainerScrollable = styled.ScrollView`
  flex-direction: column;
  padding: 5px;
  padding-bottom: 130px;
  margin-top: 45px;
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

export const QuestionNumber = styled.Text`
  font-size: 14px;
  color: #262626;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const TabBarButton = styled.TouchableOpacity`
  margin-top: 5px;
  align-items: center;
  margin-right: 25px;
`;

export const TabBarCenter = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const TabBarTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
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
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BottomTabBarButton = styled.TouchableOpacity`
  margin-top: 5px;
  margin: 15px;
  align-items: center;
`;

export const BottomTabBarCenterButton = styled.TouchableOpacity`
  margin-top: 5px;
  margin-left: 45px;
  margin-right: 45px;
  align-items: center;
`;
