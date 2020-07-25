import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 4px;
  padding: 16px;
  width: 100%;

  border: 1px solid #f1f1f1;
  color: #999;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #1e66ab;
      border-width: 2px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #1e66ab;
      border-color: #1e66ab;
      border-width: 2px;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #1e66ab;
      border-color: #f1f1f1;
      border-width: 1px;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-weight: 300;
    color: #262626;

    &::placeholder {
      color: #999;
      font-weight: 300;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;
  svg {
    margin: 0;
  }

  span {
    background: #1e66ab;
    color: #ffffff;
  }
`;
