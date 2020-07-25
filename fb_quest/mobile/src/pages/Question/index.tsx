import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {WebView} from 'react-native-webview';

import {
  Container,
  WelcomeText,
  QuestionText,
  Button,
  TabBarButton,
  TabBarTitle,
  TabBarButtonText,
  TabBarCenter,
  Timer,
  QuestionNumber,
} from './styles';

const data = {
  id: '5ea71e3db51d509bfcfcae2a',
  alternativas: [
    {
      letra: 'A',
      correta: false,
      texto: '<div>&nbsp;Positivismo científico.&nbsp;</div>',
    },
    {
      letra: 'B',
      correta: false,
      texto: '<div>&nbsp;Materialismo histórico dialético.&nbsp;</div>',
    },
    {
      letra: 'C',
      correta: false,
      texto: '<div>&nbsp;Evolucionismo.&nbsp;</div>',
    },
    {
      letra: 'D',
      correta: true,
      texto: '<div>&nbsp;Determinismo.&nbsp;</div>',
    },
    {
      letra: 'E',
      correta: false,
      texto: '<div>Neoliberalismo.&nbsp;</div>',
    },
  ],
  vestibular: 'ENEM',
  materia: 'Português',
  ano: 2018,
  numeroQuestao: 42,
  resolucao:
    '<div>&nbsp;Na segunda estrofe do poema de Augusto dos Anjos, percebe-se a perspectiva do Determinismo, forte corrente de pensamento que norteou a literatura do final do século XIX e início, ainda, do século XX.&nbsp; &nbsp;</div>',
  enunciado:
    '<div>&nbsp;</div><div><strong>VERSOS ÍNTIMOS</strong>&nbsp;</div><div>&nbsp;</div><div>Vês! Ninguém assistiu ao formidável&nbsp;</div><div>Enterro de tua última quimera.&nbsp;</div><div>Somente a Ingratidão – esta pantera –&nbsp;</div><div>Foi tua companheira inseparável!&nbsp;</div><div>&nbsp;</div><div>Acostuma-te à lama que te espera!&nbsp;</div><div>O Homem, que, nesta terra miserável,&nbsp;</div><div>Mora, entre feras, sente inevitável&nbsp;</div><div>Necessidade de também ser fera.&nbsp;</div><div>&nbsp;</div><div>Toma um fósforo. Acende teu cigarro!&nbsp;</div><div>O beijo, amigo, é a véspera do escarro,&nbsp;</div><div>A mão que afaga é a mesma que apedreja.&nbsp;</div><div>&nbsp;</div><div>Se a alguém causa inda pena a tua chaga,&nbsp;</div><div>Apedreja essa mão vil que te afaga,&nbsp;</div><div>Escarra nessa boca que te beija!&nbsp;</div><div><br>Augusto dos Anjos&nbsp;</div><div>&nbsp;</div><div>A poesia de Augusto dos Anjos, maior representante da poesia do chamado Pré-Modernismo brasileiro, constitui uma síntese das manifestações poéticas anteriores a ela: Romantismo, Parnasianismo e Simbolismo. Além do mais, aponta caminhos para novas perspectivas poéticas e está impregnada das teorias científicas de sua época, conforme expresso na segunda estrofe do poema. A teoria que fica mais visível na referida estrofe é:&nbsp;</div>',
  disponivel: true,
};

const Question: React.FC = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TabBarCenter>
          <TabBarTitle>Biologia</TabBarTitle>
          <Timer>00:04:18</Timer>
        </TabBarCenter>
      ),
      headerLeft: null,
      headerRight: () => (
        <TabBarButton onPress={() => navigation.navigate('HomeRoutes')}>
          {/* <IconAntDesign name="left" size={24} color="#262626" /> */}
          <TabBarButtonText>Sair</TabBarButtonText>
        </TabBarButton>
      ),
    });
  });

  return (
    <Container>
      <QuestionNumber>QUESTÃO 1</QuestionNumber>
      <WebView source={{uri: data.enunciado}} style={{marginTop: 20}} />
      {/* <QuestionText>{data.enunciado} </QuestionText> */}
    </Container>
  );
};

export default Question;
