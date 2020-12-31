import styled from 'styled-components/native';
import {color0, color1, colorl0} from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colorl0};
`;

// font-family: 'OpenSans-Bold';

export const FormContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 40px 5px;
`;

export const Logo = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const LogoText = styled.Text`
  font-size: 24px;
  color: ${color1};
  font-weight: bold;
`;

export const WelcomeTitle = styled.Text`
  font-weight: bold;
  font-size: 48px;
  color: #000000;
  margin: 5px 5px;
  opacity: 0.85;
`;

export const WelcomeText = styled.Text`
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  margin: 5px 5px;
  margin-bottom: 42px;
  opacity: 0.5;
`;

export const InstructionsText = styled.Text`
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
  margin: 15px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #ffffff;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.backgroundColor === undefined
      ? 'transparent'
      : props.backgroundColor};

  border-radius: 20px;
  border: 1px solid #1e66ab;

  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${(props) => (props.color === undefined ? '#ffffff' : props.color)};
  font-weight: 600;
  text-transform: uppercase;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
  resize-mode: contain;
`;

export const FacebookButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #3b5998;

  border-radius: 20px;

  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const IconButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.backgroundColor === undefined
      ? '#ffffff'
      : `${props.backgroundColor}`};
  height: 42px;
  width: 42px;
  border-radius: 21px;
  margin: 5px;
`;

export const SuperiorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`;

export const SuperiorBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InferiorContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
`;

interface WelcomeBalloonProps {
  color: string;
}

export const WelcomeBalloon = styled.View`
  background: ${(props: WelcomeBalloonProps) =>
    props.color === undefined ? '#ffffff' : `${props.color}`};
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const WelcomeBalloonText = styled.Text`
  color: #ffffff;
`;
