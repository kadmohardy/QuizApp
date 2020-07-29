import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  margin-top: 25px;
`;
