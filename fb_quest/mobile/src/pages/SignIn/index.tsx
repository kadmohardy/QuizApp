import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcon.loadFont();
import IconAntDesign from 'react-native-vector-icons/AntDesign';
IconAntDesign.loadFont();

import {
  Container,
  FormContainer,
  Logo,
  Image,
  Form,
  Input,
  BrandsContainer,
  IconButton,
  SignLink,
  SignLinkText,
  SubmitButton,
  SubmitButtonText,
  GeneralText,
  FormItem,
  TabBarTitle,
  TabBarButton,
} from './styles';

import logo from '../../assets/logo/logo_double_color_v2.png';
import {signInRequest} from '../../store/modules/auth/actions';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const passwordRef = useRef();

  const [email, setEmail] = useState('kadmothadeu@gmail.com');
  const [password, setPassword] = useState('napstera');
  // const loading = useSelector((state) => state.auth.loading);

  async function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TabBarTitle>SIGN IN</TabBarTitle>,
      headerLeft: () => (
        <TabBarButton onPress={() => navigation.navigate('Welcome')}>
          <IconAntDesign name="left" size={24} color="#262626" />
        </TabBarButton>
      ),
    });
  });

  return (
    <Container>
      <FormContainer>
        {/* <Logo>
          <Image source={logo} />
        </Logo> */}

        <Form>
          <FormItem>
            <IconAntDesign name="mail" size={24} color="#1E66AB" />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Usuário"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
          </FormItem>

          <FormItem>
            <IconAntDesign name="key" size={24} color="#1E66AB" />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              placeholder="Senha"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </FormItem>

          <SubmitButton
            // loading={loading}
            onPress={handleSubmit}>
            <SubmitButtonText>Entrar</SubmitButtonText>
          </SubmitButton>
          <GeneralText>ou, entre usando</GeneralText>

   
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
