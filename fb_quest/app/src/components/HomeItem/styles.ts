import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
  selected: boolean;
}
// border-style: ${(props: ContainerProps) =>
//   props.selected ? 'solid' : 'dashed'};
// border-color: ${(props: ContainerProps) =>
//   props.selected ? 'rgba(0,0,0,0.85)' : 'rgba(0, 0, 0, 0.15)'};
// border-width: 2px;

// shadow-color: #000;
//   shadow-offset: 0 5px;
//   shadow-opacity: 0.2;
//   shadow-radius: 3.84;
//   elevation: 5;
export const Container = styled.TouchableOpacity`
  background: transparent;
  height: 90px;
  width: 90px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 0 5px;

  shadow-color: #cecece;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3.84;
  elevation: 1;
`;

// font-family: ${mainFont};

export const Label = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-weight: ${(props: ContainerProps) => (props.selected ? 'bold' : 500)};
  color: ${(props: ContainerProps) =>
    props.selected ? 'rgba(0,0,0,0.85)' : 'rgba(0, 0, 0, 0.6)'};
`;
