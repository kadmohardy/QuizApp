import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 4px;
  padding: 16px;

  border: 1px solid #f1f1f1;
  color: #999;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 720px;
  background: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  h4 {
    align-self: flex-start;
    color: #262626;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.7;
    margin-top: 25px;
    margin-bottom: 15px;
    margin-left: 75px;
  }
`;

export const QuestionTopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 720px;
  background: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const QuestionBottomBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 720px;
  background: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
