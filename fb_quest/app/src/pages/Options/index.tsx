import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import IconEntypo from 'react-native-vector-icons/Entypo';
IconEntypo.loadFont();
import {
  Container,
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
  AnswerStatus,
  AnswerLabel,
} from './styles';
import HTMLView from 'react-native-htmlview';
import {
  IQuestionOption,
  IQuestion,
  IReduxQuestion,
} from '../../interfaces/Question';
import {QuestionState} from '../../store/modules/mock/types';
import RootState from 'src/store/modules/rootState';
import {
  setAnswerForQuestion,
  solveQuestion,
} from '../../store/modules/mock/actions';

const styles = StyleSheet.create({
  b: {
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.125)', // make links coloured pink
  },
});

interface OptionsProps {
  question: IQuestion;
}

const optionsInitialState = [
  {letra: 'A', checked: false},
  {letra: 'B', checked: false},
  {letra: 'C', checked: false},
  {letra: 'D', checked: false},
  {letra: 'E', checked: false},
];

const Options: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const {id, data} = route.params;
  const [questionAnswer, setQuestionAnswer] = useState<
    IQuestionOption | undefined
  >(undefined);
  const [inOptions, setInOptions] = useState(true);

  const [loadOptions, setLoadOptions] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [checkedArray, setCheckedArray] = useState(optionsInitialState);

  const state = useSelector((state: RootState) => state.mock);

  const questionSelector = createSelector(
    (state: RootState) => state.mock.questions,
    (questions) =>
      questions?.filter((item) => {
        return item.id === id;
      })[0],
  );

  const question = useSelector(questionSelector);
  const isAnswer = question ? question?.answer.length > 0 : false;
  useEffect(() => {
    console.tron.log('DADOS ', question);
    setLoadOptions(true);
  }, [question]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TabBarCenter>
          <TabBarTitle>{question?.data.materia}</TabBarTitle>
          <Timer>00:04:18</Timer>
        </TabBarCenter>
      ),
      headerLeft: () => (
        <TabBarButton
          onPress={() => navigation.navigate('Question', {next: true})}>
          <IconAntDesign name="left" size={24} color="rgba(0,0,0,.125)" />
        </TabBarButton>
      ),
      headerRight: null,
    });
  });

  function setQuestionOption(option: IQuestionOption) {
    if (question && !question.solved)
      dispatch(setAnswerForQuestion(question?.id, option.letra));
  }

  function isChecked(option: IQuestionOption) {
    return question?.answer == option.letra;
  }

  function handleSolveQuestion() {
    if (question) dispatch(solveQuestion(question.id));
  }

  function isCorrect() {
    const correctOption = question?.data.alternativas.filter((item) => {
      return item.correta == true;
    })[0];

    return question?.answer == correctOption?.letra;
  }

  return (
    <Container>
      <Title>{inOptions ? 'ALTERNATIVAS' : 'RESOLUÇÃO'}</Title>
      <ContainerScrollable>
        {inOptions && question && (
          <OptionsContainer>
            {question.data.alternativas.map((item: IQuestionOption) => {
              return (
                <OptionContainer>
                  <OptionLabelContainer checked={isChecked(item)}>
                    <OptionLabel>{item.letra}</OptionLabel>
                  </OptionLabelContainer>
                  <RightContainer>
                    <OptionButton
                      checked={isChecked(item)}
                      onPress={() => setQuestionOption(item)}>
                      <HTMLView value={item.texto} stylesheet={styles} />
                    </OptionButton>
                    {question?.solved && item.letra == question.answer && (
                      <StatusContainer correct={isCorrect()}>
                        <IconEntypo
                          name={isCorrect() ? 'check' : 'emoji-sad'}
                          size={24}
                          color="#fff"
                        />
                      </StatusContainer>
                    )}
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
      {isAnswer && !question?.solved && (
        <Button onPress={handleSolveQuestion}>
          <ButtonText>CONFIRMAR</ButtonText>
        </Button>
      )}
      {question?.solved && (
        <AnswerStatus correct={isCorrect()}>
          <AnswerLabel>
            {isCorrect() ? 'Você acertou!' : 'Você errou!'}
          </AnswerLabel>
        </AnswerStatus>
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
