import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenWidth, ScreenHeight} from '../../utils/ScreenHelper';
import {color0, colorl0} from '../../styles/Colors';
import Svg, {Path} from 'react-native-svg';

import {
  Container,
  Logo,
  FormContainer,
  Image,
  WelcomeTitle,
  WelcomeText,
  SuperiorContainer,
  InferiorContainer,
  LogoText,
  SuperiorBar,
  WelcomeBalloon,
  WelcomeBalloonText,
} from './styles';
import logo from '../../assets/icons/donkey.png';
import SubmitButton from '../../components/SubmitButton';
import LabelButton from '../../components/LabelButton';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <FormContainer>
        <Svg
          height="100%"
          width="100%"
          viewBox={`0 0 ${ScreenWidth} ${ScreenHeight}`}
          style={{position: 'absolute', top: 0}}>
          <Path
            d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z" // put your path here
            fill="#ffffff"
          />
        </Svg>
        <SuperiorContainer>
          <SuperiorBar>
            <Logo>
              <Image source={logo} />
              <LogoText>iOn! </LogoText>
            </Logo>
            <LabelButton
              action={() => navigation.navigate('SignIn')}
              selected={true}
              description="Já tenho conta"
            />
          </SuperiorBar>
        </SuperiorContainer>
        <InferiorContainer>
          {/* <WelcomeBalloon color="red">
            <WelcomeBalloonText>Biologia</WelcomeBalloonText>
          </WelcomeBalloon>
          <WelcomeBalloon>
            <WelcomeBalloonText>Biologia</WelcomeBalloonText>
          </WelcomeBalloon> */}
          <WelcomeTitle>Vamos começar!</WelcomeTitle>
          <WelcomeText>O mulinha vai te ajudar a passar</WelcomeText>
          {/* <Button
            onPress={() => navigation.navigate('SignIn')}
            backgroundColor="#1E66AB">
            <ButtonText>Entrar</ButtonText>
          </Button> */}
          <SubmitButton
            action={() => navigation.navigate('SignUp')}
            color={color0}
            description="CRIAR CONTA"
            loading={false}
          />
        </InferiorContainer>
      </FormContainer>
    </Container>
  );
};

export default Welcome;
