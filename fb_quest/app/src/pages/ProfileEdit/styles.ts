import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {ScreenWidth} from '../../utils/ScreenHelper';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #ffffff;
`;

export const ContainerScrollable = styled.ScrollView`
  flex-direction: column;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: 75px;
  padding: 15px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const EditItem = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 5px;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;

export const InputContainerLeft = styled.View`
  flex: 12;
`;

export const InputContainerRight = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput.attrs({placeholderTextColor: '#999'})`
  height: 40px;
  font-size: 24px;
  text-align: center;
  text-align: left;
  font-weight: bold;
  color: #262626;
  opacity: 0.8;
`;

export const Title = styled.Text`
  font-weight: 300;
  font-size: 16px;
  color: #999;
  margin-right: 8px;
`;

export const Avatar = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 45px;
  margin-bottom: 10px;
`;

export const AvatarImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 45px;
`;

export const Header = styled.View``;

export const HeaderLabel = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #262626;
  margin-right: 8px;
`;

export const TabBarButton = styled.TouchableOpacity`
  align-items: center;
  margin-left: 15px;
`;

export const UpdateButtonWarning = styled.Text`
  font-weight: 600;
  font-size: 12px;
  color: red;
  margin-right: 8px;
`;

export const UpdateButton = styled(RectButton)`
  width: ${ScreenWidth}px;
  margin-top: 15px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: blue;
  border-radius: 4px;
`;

interface LabelProps {
  weight?: number;
  color?: string;
  size?: number;
  marginRight?: number;
  marginLeft?: number;
  marginBottom?: number;
  opacity?: number;
}

export const Label = styled.Text<LabelProps>`
  font-weight: ${(props) => (props.weight === undefined ? 300 : props.weight)};
  font-size: ${(props) =>
    props.size === undefined ? '14' : `${props.size}`}px;
  color: ${(props) => (props.color === undefined ? '#999' : `${props.color}`)};
  margin-right: ${(props) =>
    props.marginRight === undefined ? 0 : `${props.marginRight}`}px;
  margin-left: ${(props) =>
    props.marginLeft === undefined ? 0 : `${props.marginLeft}`}px;
  margin-bottom: ${(props) =>
    props.marginBottom === undefined ? 0 : `${props.marginBottom}`}px;
  opacity: ${(props) => (props.opacity === undefined ? 1 : `${props.opacity}`)};
`;

export const TabBar = styled.View`
  flex: 1;
  margin-bottom: 45px;
  align-items: flex-end;
  flex-direction: row;
`;

export const TabBarTitle = styled.Text`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  color: #262626;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1e66ab;

  border-radius: 24px;

  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const ButtonText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
`;
