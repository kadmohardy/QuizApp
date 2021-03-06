import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
IconAwesome.loadFont();
import IconAntDesign from 'react-native-vector-icons/AntDesign';
IconAntDesign.loadFont();
// import { LoginButton, AccessToken } from 'react-native-fbsdk';
import {signOut} from '../../store/modules/auth/actions';
import kadmo from '../../assets/images/masculino.jpg';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  TabBar,
  FormContainer,
  SignLink,
  InstructionsText,
  Button,
  ButtonText,
  ProblemLinkText,
  ContainerScrollable,
  ProfileItem,
  ProfileItemLeftContainer,
  ProfileItemRightContainer,
  ProfileItemCenterContainer,
  ProfileTitle,
  ProfileSubTitle,
  Avatar,
  AvatarImage,
  Content,
} from './styles';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const profile = useSelector((state) => state.user.profile);

  const [name, setName] = useState('Kadmo');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <TabBar>
          <Button
            marginTop={30}
            onPress={() => {
              navigation.navigate('ProfileEdit');
            }}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <Avatar>
                  <AvatarImage source={kadmo} />
                </Avatar>
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer profile={true}>
                <ProfileTitle>Kadmo</ProfileTitle>
                <ProfileSubTitle>Editar Perfil</ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
        </TabBar>
        <ContainerScrollable>
          <Button marginTop={5}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="bells" size={20} color="#262626" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileTitle>Notificações</ProfileTitle>
                <ProfileSubTitle>Central de notificações</ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>

          <Button marginTop={40}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="profile" size={24} color="#999" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileSubTitle size={16} weight={500}>
                  Meu plano
                </ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
          <Button marginTop={10}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="bulb1" size={24} color="#999" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileSubTitle size={16} weight={500}>
                  Ajuda
                </ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
          <Button marginTop={10}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="infocirlceo" size={24} color="#999" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileSubTitle size={16} weight={500}>
                  Sobre
                </ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
          <Button marginTop={5} marginBottom={50} onPress={handleSignOut}>
            <ProfileItem>
              <ProfileTitle>Sair</ProfileTitle>
            </ProfileItem>
          </Button>
        </ContainerScrollable>
      </Content>
    </Container>
  );
};

export default Profile;
