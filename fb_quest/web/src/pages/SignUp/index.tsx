import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FaFacebook, FaGooglePlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import {
  AiOutlineUser,
  AiOutlineKey,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';

import {
  Container,
  Content,
  Background,
  SocialButtonsContainer,
  HeaderContainer,
  Logo,
  WelcomeContainer,
  Footer,
  AnimationContainer,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo/logo.png';
import { signUpRequest } from '../../store/modules/auth/actions';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'No mínimo oito digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signUpRequest(data.name, data.email, data.password));
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background>
        <Logo>
          <img src={logo} width={160} alt="FBQuestAdmin" />
          <span>FBQuest.Web</span>
        </Logo>
        <WelcomeContainer>
          <span>Bem vindo</span>
          <h1>Gerenciador de questões</h1>
        </WelcomeContainer>
        <Footer>
          <h4>Ainda não tem uma conta?</h4>
          <Link className="button" to="/">
            Já tenho uma conta
          </Link>
          <h5>ou se preferir, cadastre-se usando</h5>

          <SocialButtonsContainer>
            <SocialButton color="red">
              <FaGooglePlus size={48} color="#DB4437" />
            </SocialButton>
            <SocialButton color="red">
              <FaFacebook size={48} color="#4267B2" />
            </SocialButton>
          </SocialButtonsContainer>
        </Footer>
      </Background>

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <HeaderContainer>
              <h1>Criar conta</h1>
              <h5>Preencha com as suas informações</h5>
            </HeaderContainer>
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
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={AiOutlineKey}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Criar conta</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
