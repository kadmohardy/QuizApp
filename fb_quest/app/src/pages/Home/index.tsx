import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  WelcomeText,
  QuestionText,
  Button,
  ButtonText,
  PickerButton,
  PickerContainer,
  PickerContainerLeft,
  QuestionsNumber,
  QuestionsLabel,
} from './styles';

import PickerModal from '../../components/PickerModal';
import {generateMockRequest} from '../../store/modules/mock/actions';
import RootState from 'src/store/modules/rootState';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state);
  console.tron.log(questions);
  const [questionsCount, setQuestionsCount] = useState(10);
  const [loadPickerModal, setLoadPickerModal] = useState(false);

  function closePickerModal() {
    setLoadPickerModal(false);
  }

  function handleChangeQuestionsCount(value: number) {
    setQuestionsCount(value);
    setLoadPickerModal(false);
  }

  function handleButtonSubmit(value: number) {
    dispatch(generateMockRequest(questionsCount));
    navigation.navigate('Question');
  }

  return (
    <Container>
      <WelcomeText>Olá, Kádmo. Seja-bem vindo!</WelcomeText>
      <QuestionText>
        Vamos lá. Informe a quantidade de questões que você deseja resolver
      </QuestionText>

      <PickerContainer>
        <PickerContainerLeft>
          <QuestionsNumber>{questionsCount}</QuestionsNumber>
          <QuestionsLabel>questões</QuestionsLabel>
        </PickerContainerLeft>
        <PickerButton onPress={() => setLoadPickerModal(true)}>
          <IconAntDesign name="plus" size={18} color="#2F94D9" />
        </PickerButton>
      </PickerContainer>
      <PickerModal
        visible={loadPickerModal}
        title="Quantidade de questões"
        value={questionsCount}
        closeModal={closePickerModal}
        changeValue={handleChangeQuestionsCount}
      />
      <Button onPress={handleButtonSubmit}>
        <ButtonText>COMEÇAR</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
