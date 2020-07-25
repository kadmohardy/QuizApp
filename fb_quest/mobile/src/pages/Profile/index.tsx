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
          <Button marginTop={0}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="message1" size={20} color="#262626" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileTitle>Chats</ProfileTitle>
                <ProfileSubTitle>Minhas conversas</ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
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
          <Button marginTop={5}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="staro" size={20} color="#262626" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileTitle>Favoritos</ProfileTitle>
                <ProfileSubTitle>Meus restaurantes favoritos</ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
          <Button marginTop={5}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="enviromento" size={20} color="#262626" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileTitle>Endereços</ProfileTitle>
                <ProfileSubTitle>Meus endereços</ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
          <Button marginTop={5}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="creditcard" size={20} color="#262626" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileTitle>Formas de pagamento</ProfileTitle>
                <ProfileSubTitle>Meus meios de pagamento</ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>

          <Button marginTop={40}>
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
          <Button marginTop={5}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="Safety" size={24} color="#999" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileSubTitle size={16} weight={500}>
                  Segurança
                </ProfileSubTitle>
              </ProfileItemCenterContainer>
              <ProfileItemRightContainer>
                <IconAwesome name="angle-right" size={20} color="#999" />
              </ProfileItemRightContainer>
            </ProfileItem>
          </Button>
          <Button marginTop={5}>
            <ProfileItem>
              <ProfileItemLeftContainer>
                <IconAntDesign name="rocket1" size={24} color="#999" />
              </ProfileItemLeftContainer>
              <ProfileItemCenterContainer>
                <ProfileSubTitle size={16} weight={500}>
                  Cadastre o seu negócio
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
