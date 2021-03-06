import styled from 'styled-components/native';

export const Content = styled.View`
  margin-top: 20px;
  background: #ffffff;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  font-size: 24px;
  font-weight: bold;
  opacity: 0.7;
`;

export const Question = styled.Text`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.4;
`;

export const ButtonsView = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;

export const LabelButton = styled.TouchableOpacity`
  background: transparent;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const LabelButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
`;
