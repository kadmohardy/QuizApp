import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  FormContainer,
  Form,
  Input,
  ButtonLoading,
  SubmitButton,
  SubmitButtonText,
  GeneralText,
  FormItem,
  TabBarTitle,
  TabBarButton,
} from './styles';

import logo from '../../assets/logo/logo.png';
import {signInRequest} from '../../store/modules/auth/actions';
import RootState from 'src/store/modules/rootState';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const passwordRef = useRef();

  const [email, setEmail] = useState('aluno@gmail.com');
  const [password, setPassword] = useState('aluno1234');
  const loading = useSelector((state: RootState) => state.auth.loading);

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

          <SubmitButton onPress={handleSubmit}>
            {loading && <ButtonLoading size="small" color="#ffffff" />}
            <SubmitButtonText>Entrar</SubmitButtonText>
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
