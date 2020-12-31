import React from 'react';

import {Container, Label} from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {color0, color1, colorl0} from '../../styles/Colors';

type Props = {
  action: () => void;
  icon: string;
  description: string;
  color: string;
  selected: boolean;
};

const HomeItem: React.FC<Props> = ({
  action,
  icon,
  description,
  color,
  selected = false,
}) => (
  <Container onPress={action} color={color} selected={selected}>
    <IconAntDesign name={icon} size={18} color={color1} />
    <Label selected={selected}>{description}</Label>
  </Container>
);

export default HomeItem;
