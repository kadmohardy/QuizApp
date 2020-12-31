import React from 'react';

import {Container, Loading, Label} from './styles';

type Props = {
  action: () => void;
  description: string;
  color: string;
  loading: boolean;
};

const SubmitButton: React.FC<Props> = ({
  action,
  description,
  color,
  loading = false,
}) => (
  <Container onPress={action} color={color}>
    {loading && <Loading />}
    <Label>{description}</Label>
  </Container>
);

export default SubmitButton;
