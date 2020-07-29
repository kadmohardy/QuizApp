import React from 'react';
import Modal from 'react-native-modal';

import {
  LabelButton,
  LabelButtonText,
  Title,
  Question,
  Content,
  ButtonsView,
} from './styles';

type ActionModalProps = {
  action(): void;
  title: string;

  visible: boolean;
  closeModal(): void;
};

const ActionModal: React.FC<ActionModalProps> = ({
  visible,
  title,
  closeModal,
  action,
}) => {
  return (
    <Modal
      isVisible={visible}
      backdropColor="#B4B3DB"
      backdropOpacity={0.8}
      alignItems="center"
      justifyContent="center"
      swipeDirection={['up', 'left', 'right', 'down']}>
      <Content>
        <Title>{title}</Title>
        {/* <Question>{question}</Question> */}
        <ButtonsView>
          <LabelButton onPress={closeModal}>
            <LabelButtonText color="#262626" opacity="0.4">
              CANCELAR
            </LabelButtonText>
          </LabelButton>
          <LabelButton onPress={action}>
            <LabelButtonText color="red" opacity="0.7">
              SIM
            </LabelButtonText>
          </LabelButton>
        </ButtonsView>
      </Content>
    </Modal>
  );
};

export default ActionModal;
