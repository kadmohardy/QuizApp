import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import IconEntypo from 'react-native-vector-icons/Entypo';

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
  OptionsContainer,
  ContainerScrollable,
  BottomTabBarContainer,
  BottomTabBarButton,
  Title,
  OptionContainer,
  OptionButton,
  OptionLabel,
  ButtonText,
  OptionLabelContainer,
  StatusContainer,
  RightContainer,
} from './styles';
import HTMLView from 'react-native-htmlview';
import {IQuestionOption} from '../../interfaces/Question';

const styles = StyleSheet.create({
  b: {
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.125)', // make links coloured pink
  },
});

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

const Options: React.FC = () => {
  const navigation = useNavigation();
  const [answer, setAnswer] = useState<IQuestionOption | undefined>(undefined);
  const [inOptions, setInOptions] = useState(true);
  const [correct, setCorrect] = useState(false);
  const [checkedArray, setCheckArray] = useState([
    {letra: 'A', checked: false},
    {letra: 'B', checked: false},
    {letra: 'C', checked: false},
    {letra: 'D', checked: false},
    {letra: 'E', checked: false},
  ]);

  useEffect(() => {
    console.tron.log(answer);
  }, [answer]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TabBarCenter>
          <TabBarTitle>Biologia</TabBarTitle>
          <Timer>00:04:18</Timer>
        </TabBarCenter>
      ),
      headerLeft: () => (
        <TabBarButton onPress={() => navigation.navigate('Question')}>
          <IconAntDesign name="left" size={24} color="rgba(0,0,0,.125)" />
        </TabBarButton>
      ),
      headerRight: null,
    });
  });

  // const isChecked = (option: string) => {
  //   console.tron.log('LETRA', option);
  //   return checkedArray.filter((item) => {
  //     item.letra === option;
  //   })[0].checked;
  // };

  function isChecked(option: string) {
    const teste = checkedArray.filter((item) => {
      item.letra == option;
    });

    console.tron.log('LETRA', teste);
  }
  return (
    <Container>
      <Title>{inOptions ? 'ALTERNATIVAS' : 'RESOLUÇÃO'}</Title>
      <ContainerScrollable>
        {inOptions && (
          <OptionsContainer>
            {data.alternativas.map((item) => {
              return (
                <OptionContainer>
                  <OptionLabelContainer checked={isChecked(item.letra)}>
                    <OptionLabel>{item.letra}</OptionLabel>
                  </OptionLabelContainer>
                  <RightContainer>
                    <OptionButton
                      checked={() => isChecked(item.letra)}
                      onPress={() => setAnswer(item)}>
                      <HTMLView value={item.texto} stylesheet={styles} />
                    </OptionButton>
                    <StatusContainer correct={correct}>
                      <IconEntypo
                        name={correct ? 'check' : 'emoji-sad'}
                        size={24}
                        color="#fff"
                      />
                    </StatusContainer>
                  </RightContainer>
                </OptionContainer>
              );
            })}
          </OptionsContainer>
        )}
        {!inOptions && (
          <OptionsContainer>
            <HTMLView value={data.resolucao} stylesheet={styles} />
          </OptionsContainer>
        )}
      </ContainerScrollable>
      {answer && (
        <Button onPress={() => navigation.navigate('Question')}>
          <ButtonText>CONFIRMAR</ButtonText>
        </Button>
      )}
      <BottomTabBarContainer>
        <BottomTabBarButton onPress={() => setInOptions(true)}>
          <IconMaterial
            name="list"
            size={48}
            color={inOptions ? '#42cc71' : 'rgba(0,0,0,.125)'}
          />
        </BottomTabBarButton>
        <BottomTabBarButton onPress={() => setInOptions(false)}>
          <IconMaterial
            name="playlist-add-check"
            size={48}
            color={!inOptions ? '#42cc71' : 'rgba(0,0,0,.125)'}
          />
        </BottomTabBarButton>
      </BottomTabBarContainer>
    </Container>
  );
};

export default Options;
