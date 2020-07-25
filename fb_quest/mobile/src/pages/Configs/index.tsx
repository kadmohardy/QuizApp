import React, {useState} from 'react';

import {
  Container,
  WelcomeText,
  QuestionText,
  Button,
  ButtonText,
  QuestionsNumberPicker,
} from './styles';

const Configs: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <Container>
      <WelcomeText>Olá, Kádmo. Seja-bem vindo!</WelcomeText>
      <QuestionText>
        Informe a quantidade de questões que você deseja resolver
      </QuestionText>
      <QuestionsNumberPicker
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <QuestionsNumberPicker.Item label="1" value="1" />
      </QuestionsNumberPicker>
      <Button>
        <ButtonText>COMEÇAR</ButtonText>
      </Button>
    </Container>
  );
};

export default Configs;
