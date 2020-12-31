import React, {useRef, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
MaterialIcon.loadFont();

import {signUpRequest} from '../../store/modules/auth/actions';
import {color0, colorl1} from '../../styles/Colors';
import SubmitButton from '../../components/SubmitButton';

import {
  Container,
  Button,
  ButtonText,
  TabBarButton,
  Section,
  Input,
  Form,
  FormItem,
  Label,
  Terms,
  TabBarTitle,
  ButtonLoading,
  WelcomeText,
  WelcomeTitle,
  FormContainer,
  Separator,
} from './styles';

import RootState from 'src/store/modules/rootState';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailRef = useRef();

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TabBarTitle>SIGN UP</TabBarTitle>,
      headerLeft: () => (
        <TabBarButton onPress={() => navigation.navigate('Welcome')}>
          <IconAntDesign name="left" size={24} color={color0} />
        </TabBarButton>
      ),
    });
  });

  const handleSubmit = useCallback(() => {
    try {
      dispatch(signUpRequest(name, email, password));
    } catch (error) {}
  }, [dispatch, name, email, password]);

  return (
    <Container>
      <FormContainer>
        <WelcomeTitle>Bem-vindo(a) ao iOn!</WelcomeTitle>
        <WelcomeText>Preencha os campos abaixo</WelcomeText>
        <Form>
          <FormItem>
            <IconAntDesign name="user" size={24} color={color0} />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
          </FormItem>
          <FormItem>
            <IconAntDesign name="mail" size={24} color={color0} />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
              returnKeyType="next"
              ref={emailRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
          </FormItem>
          <FormItem>
            <IconAntDesign name="lock1" size={24} color={color0} />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              placeholder="Senha"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </FormItem>
          <FormItem>
            <IconAntDesign name="lock1" size={24} color={color0} />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              placeholder="Confirmar senha"
              ref={confirmPasswordRef}
              returnKeyType="send"
              //onSubmitEditing={handleSubmit}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </FormItem>
          <Separator />
          <SubmitButton
            action={() => navigation.navigate('SignUp')}
            color={colorl1}
            description="CRIAR CONTA"
            loading={loading}
          />
        </Form>
        <Terms>
          <Label size={12} color="#262626" marginTop={10} opacity={0.8}>
            Ao criar uma conta, você concorda com nossos Termos e com a Política
            de Privacidade.
          </Label>
        </Terms>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
