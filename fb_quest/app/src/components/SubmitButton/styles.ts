import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}
export const Container = styled.TouchableOpacity`
  background: ${(props: ContainerProps) => props.color};
  height: 48px;
  width: 300px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
// font-family: ${mainFont};

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`;

export const Loading = styled.ActivityIndicator`
  margin-right: 10px;
`;
