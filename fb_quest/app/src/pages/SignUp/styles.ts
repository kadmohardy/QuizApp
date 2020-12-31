import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../utils/ScreenHelper';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 0px 30px ${Platform.OS === 'android' ? 120 : 30}px;
`;

export const Logo = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;

  shadow-color: #262626;
  shadow-offset: 0 2px;
  shadow-opacity: 0.5;
  shadow-radius: 3.84;

  elevation: 1;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1e66ab;

  border-radius: 20px;

  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
`;

export const FacebookButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #3b5998;

  border-radius: 20px;

  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const FacebookButtonView = styled.View``;

interface SectionProps {
  flex: number;
  background?: string;
}

export const Section = styled.View<SectionProps>`
  flex: ${(props) => (props.flex === undefined ? 1 : props.flex)};
  background: ${(props) =>
    props.background === undefined ? '#ffffff' : props.background};
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 40px;
  margin-top: 5px;
  background: transparent;
  border-radius: 4px;
  padding: 0 15px;

  color: #262626;
  font-weight: 300;
  font-size: 16px;
  width: 300px;
`;

export const Form = styled.View`
  border-color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

export const FormItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
  height: 45px;
  width: 320px;
`;

interface TextProps {
  weight?: number;
  color?: string;
  marginRight?: number;
  marginLeft?: number;
  size?: number;
  marginBottom?: number;
  marginTop?: number;
  opacity?: number;
}

export const Label = styled.Text<TextProps>`
  font-weight: ${(props) => (props.weight === undefined ? 300 : props.weight)};
  font-size: ${(props) =>
    props.size === undefined ? '14' : `${props.size}`}px;
  color: ${(props) => (props.color === undefined ? '#999' : `${props.color}`)};
  margin-right: ${(props) =>
    props.marginRight === undefined ? 0 : `${props.marginRight}`}px;
  margin-left: ${(props) =>
    props.marginLeft === undefined ? 0 : `${props.marginLeft}`}px;
  margin-bottom: ${(props) =>
    props.marginBottom === undefined ? 0 : `${props.marginBottom}`}px;
  margin-top: ${(props) =>
    props.marginTop === undefined ? 0 : `${props.marginTop}`}px;
  opacity: ${(props) => (props.opacity === undefined ? 1 : `${props.opacity}`)};
`;

export const Terms = styled.View`
  padding: 10px;
`;

export const TabBarTitle = styled.Text`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  color: #262626;
  margin-top: 10px;
`;

export const TabBarButton = styled.TouchableOpacity`
  margin-left: 25px;
  justify-content: center;
  align-items: center;
`;

export const GenderPickerContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

interface GenderPickerProps {
  backgroundColor?: string;
  opacity?: number;
}

export const GenderPicker = styled.TouchableOpacity<GenderPickerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor === undefined
      ? 'transparent'
      : `${props.backgroundColor}`};
  opacity: ${(props) => (props.opacity === undefined ? 1 : `${props.opacity}`)};
  height: 40px;
  width: 300px;
`;

interface GenderTextProps {
  color: string;
  weight: number;
}

export const GenderPickerText = styled.Text<GenderTextProps>`
  color: ${(props) => (props.color === undefined ? '#999' : `${props.color}`)};
  font-weight: ${(props) =>
    props.weight === undefined ? 300 : `${props.weight}`};
`;

export const BrandsContainer = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.backgroundColor === undefined
      ? '#ffffff'
      : `${props.backgroundColor}`};
  height: 42px;
  width: 42px;
  border-radius: 21px;
  margin: 5px;
`;

export const ButtonLoading = styled.ActivityIndicator`
  margin-right: 10px;
`;

export const WelcomeTitle = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  margin: 5px 5px;
  opacity: 0.85;
`;

export const WelcomeText = styled.Text`
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  margin: 5px 5px;
  opacity: 0.5;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
`;

export const Separator = styled.View`
  margin-bottom: 24px;
`;
