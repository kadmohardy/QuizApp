import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
`;

// font-family: 'OpenSans-Bold';

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.View`
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px;

  shadow-color: #262626;
  shadow-offset: 0 2px;
  shadow-opacity: 0.5;
  shadow-radius: 3.84;

  elevation: 1;
`;

export const LogoText = styled.Text`
  font-size: 16px;
  color: #262626;
  font-weight: 300;
`;

export const WelcomeText = styled.Text`
  font-weight: 300;
  font-size: 24px;
  color: #262626;
  margin: 15px;

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
  border: 1px solid #1E66AB;

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
  width: 180px;
  height: 80px;
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


