import React from 'react';

import {Container, Label} from './styles';

type Props = {
  action: () => void;
  description: string;
};

const LabelButton: React.FC<Props> = ({action, description}) => (
  <Container onPress={action}>
    <Label>{description}</Label>
  </Container>
);

export default LabelButton;
