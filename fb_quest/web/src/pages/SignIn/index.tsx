import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FaFacebook, FaGooglePlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
  Container,
  Content,
  Background,
  Footer,
  SocialButtonsContainer,
  HeaderContainer,
  WelcomeContainer,
  Logo,
  AnimationContainer,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
import { signInRequest } from '../../store/modules/auth/actions';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo/logo.png';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(signInRequest(data.email, data.password));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [addToast, signInRequest],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <HeaderContainer>
              <h1>Entrar</h1>
              <h5>Entre com as suas credenciais</h5>
            </HeaderContainer>
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <a href="forgot">Esqueci a senha</a>

            <Button type="submit">Entrar</Button>
          </Form>
          <h3>ou se preferir, entre usando</h3>
          <SocialButtonsContainer>
            <SocialButton color="red">
              <FaGooglePlus size={48} color="#DB4437" />
            </SocialButton>
            <SocialButton color="red">
              <FaFacebook size={48} color="#4267B2" />
            </SocialButton>
          </SocialButtonsContainer>
        </AnimationContainer>
      </Content>

      <Background>
        <Logo>
          <img src={logo} width={240} alt="FBQuestWeb" />
          <span>FBQuest.Web</span>
        </Logo>
        <WelcomeContainer>
          <span>Bem vindo</span>
          <h1>Gerenciador de questões.</h1>
        </WelcomeContainer>
        <Footer>
          <h4>Ainda não tem uma conta?</h4>
          <Link className="button" to="/signup">
            Criar conta
          </Link>
        </Footer>
      </Background>
    </Container>
  );
};
export default SignIn;
