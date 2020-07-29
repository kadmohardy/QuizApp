import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
  ContainerScrollable,
  BottomTabBarContainer,
  BottomTabBarButton,
  BottomTabBarCenterButton,
} from './styles';
import HTMLView from 'react-native-htmlview';
import RootState from '../../store/modules/rootState';
import {QuestionState} from '../../store/modules/mock/types';
import {finishMock} from '../../store/modules/mock/actions';
import {current} from 'immer';

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});

const Question: React.FC = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const questions = useSelector((state: RootState) => state.mock.questions);
  const questionsCount: number = questions ? questions?.length : 0;
  const [currentQuestionId, setCurrentQuestionId] = useState(1);

  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionState | undefined
  >(undefined);

  useEffect(() => {
    const currQuestion = questions?.filter((question) => {
      return question.id === currentQuestionId;
    })[0];

    setCurrentQuestion(currQuestion);
  }, [currentQuestionId]);

  function handleClose() {
    navigation.navigate('Home');
  }

  function handleFinish() {
    console.tron.log('finalizandasduhasudhushduahusd');
    if (questions) dispatch(finishMock(questions));
  }

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
        <TabBarButton onPress={handleClose}>
          <TabBarButtonText>Sair</TabBarButtonText>
        </TabBarButton>
      ),
    });
  });

  return (
    <Container>
      <ContainerScrollable>
        <QuestionNumber>{`Questão ` + currentQuestionId}</QuestionNumber>
        {currentQuestion?.data.enunciado && (
          <HTMLView
            value={currentQuestion?.data.enunciado}
            stylesheet={styles}
          />
        )}
      </ContainerScrollable>
      <BottomTabBarContainer>
        {currentQuestionId > 1 && (
          <BottomTabBarButton
            onPress={() => setCurrentQuestionId(currentQuestionId - 1)}>
            <TabBarButtonText>Anterior</TabBarButtonText>
          </BottomTabBarButton>
        )}
        <BottomTabBarCenterButton
          onPress={() => navigation.navigate('Options', currentQuestion)}>
          <IconAntDesign name="questioncircleo" size={32} color="#42cc71" />
        </BottomTabBarCenterButton>
        {currentQuestionId < questionsCount && (
          <BottomTabBarButton
            onPress={() => setCurrentQuestionId(currentQuestionId + 1)}>
            <TabBarButtonText>Pular</TabBarButtonText>
          </BottomTabBarButton>
        )}

        {currentQuestionId == questionsCount && (
          <BottomTabBarButton onPress={handleFinish}>
            <TabBarButtonText>Finalizar</TabBarButtonText>
          </BottomTabBarButton>
        )}
      </BottomTabBarContainer>
    </Container>
  );
};

export default Question;
