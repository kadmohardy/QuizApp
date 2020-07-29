import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

import {
  Container,
  WelcomeText,
  QuestionText,
  Button,
  TabBarButton,
  TabBarTitle,
  TabBarButtonText,
  TabBarCenter,
  TimerCounter,
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
import ActionModal from '../../components/ActionModal';

import {current} from 'immer';

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});

const timerStyles = {
  container: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    color: '#000',
    marginLeft: 7,
  },
};

const Question: React.FC = () => {
  let timer: string;
  const route = useRoute();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const questions = useSelector((state: RootState) => state.mock.questions);
  const questionsCount: number = questions ? questions?.length : 0;
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [loadActionModal, setLoadActionModal] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionState | undefined
  >(undefined);

  useEffect(() => {
    const currQuestion = questions?.filter((question) => {
      return question.id === currentQuestionId;
    })[0];

    setCurrentQuestion(currQuestion);
  }, [currentQuestionId]);

  useEffect(() => {
    setStartTimer(true);
  }, []);

  function handleClose() {
    navigation.navigate('Home');
  }

  function handleFinish() {
    if (questions) dispatch(finishMock(questions, timer));
    navigation.navigate('Report');
    setLoadActionModal(false);
    setStartTimer(false);
  }

  function getFormattedTime(time: string) {
    timer = time;
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TabBarCenter>
          <TabBarTitle>Biologia</TabBarTitle>
          <Stopwatch
            laps
            start={startTimer}
            reset={false}
            options={timerStyles}
            getTime={getFormattedTime}
          />
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
          <BottomTabBarButton onPress={() => setLoadActionModal(true)}>
            <TabBarButtonText>Finalizar</TabBarButtonText>
          </BottomTabBarButton>
        )}
        <ActionModal
          visible={loadActionModal}
          title="Deseja finalizar?"
          action={handleFinish}
          closeModal={() => setLoadActionModal(false)}
        />
      </BottomTabBarContainer>
    </Container>
  );
};

export default Question;
