import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  WelcomeText,
  WelcomeSubText,
  PickerButton,
  PickerContainer,
  PickerContainerLeft,
  QuestionsNumber,
  QuestionsLabel,
  SectionTitle,
  Section,
  Options,
  Content,
} from './styles';

import PickerModal from '../../components/PickerModal';
import {generateMockRequest} from '../../store/modules/mock/actions';
import RootState from 'src/store/modules/rootState';
import HomeItem from '../../components/HomeItem';
import FilterItem from '../../components/FilterItem';
import SubmitButton from '../../components/SubmitButton';

import {color1} from '../../styles/Colors';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state);
  console.tron.log(questions);
  const [questionsCount, setQuestionsCount] = useState(10);
  const [selectedOption, setSelectedOption] = useState('questions');
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
  // Questões
  // Simulados

  //Filtros
  //Resolvidas
  //Disciplina
  //Ano
  //Instituição

  return (
    <Container>
      <WelcomeText>Olá, Kádmo</WelcomeText>
      <WelcomeSubText>Vamos resolver questões?</WelcomeSubText>
      <Content>
        <Section>
          <SectionTitle>Menu</SectionTitle>
          <Options>
            <HomeItem
              description="Questões"
              icon="questioncircleo"
              selected={selectedOption === 'questions'}
              action={() => setSelectedOption('questions')}
            />
            <HomeItem
              description="Simulados"
              icon="form"
              selected={selectedOption === 'simulados'}
              action={() => setSelectedOption('simulados')}
            />
          </Options>
        </Section>
        <Section>
          <SectionTitle>Disciplinas</SectionTitle>
          <Options>
            <HomeItem
              description="Questões"
              icon="questioncircleo"
              selected={selectedOption === 'questions'}
              action={() => setSelectedOption('questions')}
            />
            <HomeItem
              description="Simulados"
              icon="form"
              selected={selectedOption === 'simulados'}
              action={() => setSelectedOption('simulados')}
            />
          </Options>
        </Section>
        <SectionTitle>Filtros</SectionTitle>
        {/* <PickerContainer>
          <PickerContainerLeft>
            <QuestionsNumber>{questionsCount}</QuestionsNumber>
            <QuestionsLabel>questões</QuestionsLabel>
          </PickerContainerLeft>
          <PickerButton onPress={() => setLoadPickerModal(true)}>
            <IconAntDesign name="plus" size={18} color="#2F94D9" />
          </PickerButton>
        </PickerContainer> */}
        {/* <PickerModal
          visible={loadPickerModal}
          title="Quantidade de questões"
          value={questionsCount}
          closeModal={closePickerModal}
          changeValue={handleChangeQuestionsCount}
        />
        <SubmitButton
          action={handleButtonSubmit}
          color={color1}
          description="COMEÇAR"
          loading={false}
        /> */}
      </Content>
    </Container>
  );
};

export default Home;
