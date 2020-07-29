import React, {useRef, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
MaterialIcon.loadFont();

import {signUpRequest} from '../../store/modules/auth/actions';
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
} from './styles';

import RootState from 'src/store/modules/rootState';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const emailRef = useRef();

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TabBarTitle>CRIAR CONTA</TabBarTitle>,
      headerLeft: () => (
        <TabBarButton onPress={() => navigation.navigate('Welcome')}>
          <IconAntDesign name="left" size={24} color="#262626" />
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
      <Section flex={4}>
        <Form>
          <FormItem>
            <IconAntDesign name="user" size={24} color="#1E66AB" />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              placeholder="nome"
              value={name}
              onChangeText={setName}
            />
          </FormItem>

          <FormItem>
            <IconAntDesign name="mail" size={24} color="#1E66AB" />
            <Input
              autocorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="email"
              returnKeyType="next"
              ref={emailRef}
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
              placeholder="senha"
              ref={passwordRef}
              returnKeyType="send"
              //onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </FormItem>

          <Button onPress={handleSubmit}>
            {loading && <ButtonLoading size="small" color="#ffffff" />}
            <ButtonText>Criar Conta</ButtonText>
          </Button>
        </Form>

        <Terms>
          <Label size={12} color="#262626" marginTop={10} opacity={0.8}>
            Ao criar uma conta, você concorda com nossos Termos e com a Política
            de Privacidade
          </Label>
        </Terms>
      </Section>
    </Container>
  );
};

export default SignUp;
