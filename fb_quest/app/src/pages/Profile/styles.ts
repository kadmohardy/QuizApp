import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  background: #ffffff;
`;

export const ContainerScrollable = styled.ScrollView`
  flex-direction: column;
  padding: 15px;
  padding-bottom: 130px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TabBar = styled.View`
  margin-top: -25px;
  flex-direction: column;
  padding: 15px;
  border-bottom-width: 1px;
  border-color: #f1f1f1;
`;

interface ButtonProps {
  marginTop?: number;
  marginBottom?: number;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) =>
    props.marginBottom === undefined ? 0 : props.marginBottom}px;
`;

export const ProfileItem = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 5px;
  margin-top: 15px;
`;
//color: ${props => props.color};
export const ProfileItemLeftContainer = styled.View`
  flex: 1;
`;

export const ProfileItemRightContainer = styled.View`
  flex: 1;
`;

interface PropfileItemCenterContainerProps {
  profile?: boolean;
}
export const ProfileItemCenterContainer = styled.View<
  PropfileItemCenterContainerProps
>`
  margin-left: ${(props) => (props.profile === true ? 45 : 15)}px;
  flex: 10;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProfileTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #262626;
  margin-right: 8px;
`;

interface ProfileSubTitleProps {
  weight?: number;
  size?: number;
}

export const ProfileSubTitle = styled.Text<ProfileSubTitleProps>`
  font-weight: ${(props) => (props.weight === undefined ? 300 : props.weight)};
  font-size: ${(props) =>
    props.size === undefined ? '14' : `${props.size}`}px;
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
