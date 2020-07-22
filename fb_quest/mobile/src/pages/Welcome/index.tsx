import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcon.loadFont();
import {
  Container,
  Logo,
  FormContainer,
  Image,
  Button,
  ButtonText,
  WelcomeText,
  BrandsContainer,
  IconButton,
  LogoText,
} from './styles';
import logo from '../../assets/logo/logo.png';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <FormContainer>
        <Logo>
          <Image source={logo} />
          <LogoText>FBQuest</LogoText>
        </Logo>
        <WelcomeText>Enem é no FB</WelcomeText>
        
        <Button onPress={() => navigation.navigate('SignIn')}
          backgroundColor="#1E66AB"
        >
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Button
          onPress={() => navigation.navigate('SignUp')}>
          <ButtonText color="#1E66AB">Criar uma conta</ButtonText>
        </Button>
       
      </FormContainer>
    </Container>
  );
};

export default Welcome;
