import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #1e66ab;

  color: #ffffff;
  border-radius: 4px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 300;
  margin-top: 16px;
  transition: color 0.2s;
  &:hover {
    background: ${shade(0.2, '#f1f1f1')};
  }
`;
