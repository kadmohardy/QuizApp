import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

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

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState(0);
  const [loadPickerModal, setLoadPickerModal] = useState(false);

  function closePickerModal(value: number) {
    setSelectedValue(value);
    setLoadPickerModal(false);
  }

  function handleButtonSubmit(value: number) {
    dispatch(generateMockRequest(10));
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
          <QuestionsNumber>12</QuestionsNumber>
          <QuestionsLabel>questões</QuestionsLabel>
        </PickerContainerLeft>
        <PickerButton onPress={() => setLoadPickerModal(true)}>
          <IconAntDesign name="plus" size={18} color="#2F94D9" />
        </PickerButton>
      </PickerContainer>
      <PickerModal
        visible={loadPickerModal}
        title="Quantidade de questões"
        value={selectedValue}
        closeModal={closePickerModal}
      />
      <Button onPress={handleButtonSubmit}>
        <ButtonText>COMEÇAR</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
