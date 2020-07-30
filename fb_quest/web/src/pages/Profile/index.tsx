import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { MdChildCare } from 'react-icons/md';

import {
  Container,
  Header,
  Content,
  Title,
  AdminData,
  DataContainer,
} from './styles';
import Input from '../../components/Input';
import { ProfileState } from '../../store/modules/user/types';
import RootState from '../../store/modules/rootState';

import Button from '../../components/Button';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const profile = useSelector<RootState>(
    (state) => state.user.profile,
  ) as ProfileState;

  const [userData, setUserData] = useState<ProfileState>(() => {
    if (profile) {
      return profile;
    }
    return {} as ProfileState;
  });

  const handleSubmit = useCallback(() => {
    try {
      console.log('LOGOS');
    } catch (error) {}
  }, []);

  return (
    <Container>
      <Header>
        <AiOutlineUser size={18} />
        <span>Perfil</span>
      </Header>
      <Content>
        <AdminData>
          <Title>
            <span>Dados do usuário</span>
          </Title>
          <DataContainer>
            <span>Dados gerais</span>

            <Form
              initialData={{
                name: userData.name,
                email: userData.email,
              }}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Input
                name="name"
                icon={AiOutlineUser}
                type="text"
                placeholder="Nome"
              />

              <Input
                name="email"
                icon={AiOutlineMail}
                type="text"
                placeholder="Email"
              />
              <Button type="submit">Atualizar</Button>
            </Form>
          </DataContainer>
          <DataContainer>
            <span>Mudança de senha</span>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="password"
                icon={AiOutlineLock}
                type="password"
                placeholder="Senha Atual"
              />
              <Input
                name="newPassword"
                icon={AiOutlineLock}
                type="password"
                placeholder="Nova Senha"
              />
              <Button type="submit">Alterar senha</Button>
            </Form>
          </DataContainer>
        </AdminData>
      </Content>
    </Container>
  );
};

export default Profile;
