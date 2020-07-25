import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: #ffffff;
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  margin: 5px;
  border-radius: 24px;
  margin-top: 16px;
  transition: color 0.2s;
  &:hover {
    background: ${shade(0.2, '#f1f1f1')};
  }
`;
