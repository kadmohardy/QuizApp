import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import IonicIcon from 'react-native-vector-icons/Ionicons';
IonicIcon.loadFont();
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  WelcomeLabel,
  GeneralLabel,
  ScoresLabel,
  Button,
  ButtonLabel,
  ScoresContainer,
  Icon,
  Timer,
} from './styles';

import clipboard from '../../assets/images/register.png';
import RootState from 'src/store/modules/rootState';
const Report: React.FC = () => {
  const mock = useSelector((state: RootState) => state.mock);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerLeft: null,
      headerRight: null,
    });
  });

  console.tron.log(mock);
  return (
    <Container>
      <WelcomeLabel>Você respondeu todas as questões</WelcomeLabel>
      <Icon source={clipboard} />
      <ScoresContainer>
        <GeneralLabel>Você concluiu o simulado com</GeneralLabel>
        <ScoresLabel>{mock.scores}%</ScoresLabel>
        <GeneralLabel>de aproveitamento</GeneralLabel>
      </ScoresContainer>
      <Timer>Tempo: {mock.time}</Timer>
      <Button onPress={() => navigation.navigate('Home')}>
        <ButtonLabel>Finalizar e voltar para questões</ButtonLabel>
      </Button>
    </Container>
  );
};

export default Report;
