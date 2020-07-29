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
  closeModal(): void;
  changeValue(value: number): void;
};

const PickerModal: React.FC<ActionModalProps> = ({
  visible,
  title,
  value,
  closeModal,
  changeValue,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const items = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  return (
    <Modal
      isVisible={visible}
      backdropColor="#B4B3DB"
      backdropOpacity={0.8}
      alignItems="center"
      justifyContent="center">
      <Content>
        <Title>{title}</Title>

        <QuestionsNumberPicker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue: number, itemIndex) =>
            setSelectedValue(itemValue)
          }>
          {items.map((item) => {
            return (
              <QuestionsNumberPicker.Item
                label={item.toString()}
                value={item}
              />
            );
          })}
        </QuestionsNumberPicker>
        <ButtonsView>
          <LabelButton onPress={() => closeModal()}>
            <LabelButtonText color="#262626" opacity="0.4">
              CANCELAR
            </LabelButtonText>
          </LabelButton>
          <LabelButton onPress={() => changeValue(selectedValue)}>
            <LabelButtonText color="#2f94d9" opacity="0.7">
              SELECIONAR
            </LabelButtonText>
          </LabelButton>
        </ButtonsView>
      </Content>
    </Modal>
  );
};

export default PickerModal;
