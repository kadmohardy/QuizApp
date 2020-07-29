import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
IconAwesome.loadFont();
import IconAntDesign from 'react-native-vector-icons/AntDesign';
IconAntDesign.loadFont();
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerScrollable,
  EditItem,
  Input,
  Title,
  Content,
  Button,
  InputContainer,
  InputContainerLeft,
  InputContainerRight,
  UpdateButtonWarning,
  UpdateButton,
  Label,
  TabBar,
  TabBarTitle,
  TabBarButton,
  ButtonText,
} from './styles';
import RootState from 'src/store/modules/rootState';

const ProfileEdit: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const profile = useSelector((state: RootState) => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TabBarTitle>ALTERAR DADOS</TabBarTitle>,
      headerLeft: () => (
        <TabBarButton onPress={() => navigation.navigate('Profile')}>
          <IconAntDesign name="left" size={24} color="#262626" />
        </TabBarButton>
      ),
    });
  });

  return (
    <Container>
      <Content>
        <ContainerScrollable>
          <EditItem>
            <Title>Nome completo</Title>
            <InputContainer>
              <InputContainerLeft>
                <Input
                  placeholder="Nome completo"
                  // onTouchStart={() => setHiddenButton(true)}
                  // onEndEditing={() => setHiddenButton(false)}
                  value={name}
                  onChangeText={(text) => setName(text)}
                  // returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
                  keyboardType="default"
                  maxLength={50}
                />
              </InputContainerLeft>
              <InputContainerRight>
                <IconAntDesign name="closecircle" size={18} color="#999" />
              </InputContainerRight>
            </InputContainer>
            {!name && (
              <UpdateButtonWarning>Insira o nome completo</UpdateButtonWarning>
            )}
          </EditItem>

          <EditItem>
            <Title>Email</Title>
            <Input
              placeholder="Email"
              // onTouchStart={() => setHiddenButton(true)}
              // onEndEditing={() => setHiddenButton(false)}
              value={email}
              onChangeText={(text) => setEmail(text)}
              // returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
              //color="rgba(0,0,0,0.7)"
              keyboardType="default"
              maxLength={50}
            />
            {!email && (
              <UpdateButtonWarning>Insira o email</UpdateButtonWarning>
            )}
          </EditItem>
          <Button onPress={() => navigation.navigate('Profile')}>
            <ButtonText>Atualizar</ButtonText>
          </Button>
        </ContainerScrollable>
      </Content>
    </Container>
  );
};

export default ProfileEdit;
