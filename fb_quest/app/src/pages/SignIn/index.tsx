import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {color1} from '../../styles/Colors';

import {
  Container,
  FormContainer,
  Form,
  Input,
  ButtonLoading,
  SubmitButtonText,
  GeneralText,
  FormItem,
  TabBarTitle,
  TabBarButton,
  WelcomeTitle,
  WelcomeText,
  Separator,
  Forgot,
  Create,
} from './styles';

import SubmitButton from '../../components/SubmitButton';
import LabelButton from '../../components/LabelButton';
import logo from '../../assets/logo/logo.png';
import {signInRequest} from '../../store/modules/auth/actions';
import RootState from 'src/store/modules/rootState';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const passwordRef = useRef();

  const [email, setEmail] = useState('aluno@gmail.com');
  const [password, setPassword] = useState('aluno2345');
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
        <WelcomeTitle>Bom ter você de volta</WelcomeTitle>
        <WelcomeText>Entre com seus dados</WelcomeText>
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
            <IconAntDesign name="lock1" size={24} color="#1E66AB" />
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
          <Forgot>
            <LabelButton
              description="Esqueceu a senha?"
              action={() => navigation.navigate('SignUp')}
            />
          </Forgot>
          <Separator />
          <SubmitButton
            action={handleSubmit}
            color={color1}
            description="ENTRAR"
            loading={loading}
          />
          <Create>
            <GeneralText>Ainda não possui conta?</GeneralText>
            <LabelButton
              description="Criar conta"
              action={() => navigation.navigate('SignUp')}
            />
          </Create>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
