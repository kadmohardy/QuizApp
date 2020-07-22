import React, {useRef, useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {TextInputMask} from 'react-native-masked-text';
import {useNavigation} from '@react-navigation/native';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
IconAwesome.loadFont();
import IconAntDesign from 'react-native-vector-icons/AntDesign';
IconAntDesign.loadFont();
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
MaterialIcon.loadFont();
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcon.loadFont();

import {signUpRequest} from '../../store/modules/auth/actions';
import {
  Container,
  Button,
  ButtonText,
  TabBarButton,
  Section,
  BrandsContainer,
  Input,
  Form,
  FormItem,
  Label,
  Terms,
  TabBarTitle,
  GenderPicker,
  GenderPickerText,
  GenderPickerContainer,
  IconButton,
} from './styles';

import {getPhone, getDate} from '../../utils/StringParser';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  const [phone, setPhone] = useState('');
  const birthdateRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const navigation = useNavigation();

  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.auth.loading);

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
      dispatch(
        signUpRequest(
          '',
          name,
          getDate(birthdate),
          gender,
          getPhone(phone),
          email,
          password,
        ),
      );
    } catch (error) {}
  }, [dispatch, name, birthdate, gender, phone, email, password]);

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
            <MaterialCommunityIcon
              name="gender-male-female"
              size={24}
              color="#1E66AB"
              onSubmitEditing={() => {
                birthdateRef.current.focus();
              }}
            />

            <GenderPickerContainer>
              <GenderPicker onPress={() => setGender('man')}>
                <GenderPickerText
                  color={gender === 'man' ? '#262626' : '#999'}
                  weight={gender === 'man' ? 800 : 300}>
                  Homem
                </GenderPickerText>
              </GenderPicker>
              <GenderPicker onPress={() => setGender('woman')}>
                <GenderPickerText
                  color={gender === 'woman' ? '#262626' : '#999'}
                  weight={gender === 'woman' ? 800 : 300}>
                  Mulher
                </GenderPickerText>
              </GenderPicker>
            </GenderPickerContainer>
          </FormItem>

          <FormItem>
            <MaterialIcon name="child-care" size={24} color="#1E66AB" />
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              fontSize={16}
              fontWeight="300"
              style={{marginLeft: 15}}
              placeholder="data de nascimento"
              placeholderTextColor="#999"
              returnKeyType="send"
              ref={birthdateRef}
              value={birthdate}
              onChangeText={(text) => {
                setBirthdate(text);
              }}
              onSubmitEditing={() => {
                phoneRef.current.focus();
              }}
            />
          </FormItem>
          <FormItem>
            <IconAntDesign name="phone" size={24} color="#1E66AB" />
            <TextInputMask
              type={'cel-phone'}
              options={
                {
                  // the options for your mask if needed
                }
              }
              fontWeight="300"
              fontSize={16}
              style={{marginLeft: 15}}
              placeholder="telefone"
              placeholderTextColor="#999"
              returnKeyType="next"
              ref={phoneRef}
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
              }}
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
            <ButtonText>Criar Conta</ButtonText>
          </Button>
        </Form>
        <Label size={16} color="#262626" marginTop={25}>
          ou, se preferir, entre usando
        </Label>

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
