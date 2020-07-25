import React, {useState} from 'react';
import Modal from 'react-native-modal';

import {
  LabelButton,
  LabelButtonText,
  Title,
  Question,
  Content,
  ButtonsView,
  QuestionsNumberPicker,
} from './styles';

type ActionModalProps = {
  title: string;
  visible: boolean;
  value: number;
  closeModal(value: number): void;
};

const PickerModal: React.FC<ActionModalProps> = ({
  visible,
  title,
  value,
  closeModal,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  return (
    <Modal
      isVisible={visible}
      backdropColor="#B4B3DB"
      backdropOpacity={0.8}
      alignItems="center"
      justifyContent="center">
      <Content>
        <Title>{title}</Title>

        {/* <QuestionsNumberPicker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <QuestionsNumberPicker.Item label="1" value="1" />
          <QuestionsNumberPicker.Item label="2" value="2" />
          <QuestionsNumberPicker.Item label="3" value="3" />
          <QuestionsNumberPicker.Item label="4" value="4" />
        </QuestionsNumberPicker> */}
        <ButtonsView>
          <LabelButton onPress={() => closeModal(selectedValue)}>
            <LabelButtonText color="#262626" opacity="0.4">
              CANCELAR
            </LabelButtonText>
          </LabelButton>
          <LabelButton onPress={() => closeModal(selectedValue)}>
            <LabelButtonText color="#2f94d9" opacity="0.7">
              SIM
            </LabelButtonText>
          </LabelButton>
        </ButtonsView>
      </Content>
    </Modal>
  );
};

export default PickerModal;
