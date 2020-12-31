import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding-bottom: 150px;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
  margin-top: 250px;
`;

export const Form = styled.View`
  border-color: #eee;

  display: flex;
  flex-direction: column;
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

export const ButtonStatusText = styled.Text`
  color: #fff;
`;

export const Logo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;

  shadow-color: #262626;
  shadow-offset: 0 2px;
  shadow-opacity: 0.5;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export const Image = styled.Image`
  flex: 1;
  width: 120px;
  height: 120px;
  resize-mode: contain;
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

export const BrandsContainer = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #1e66ab;
  border-radius: 20px;

  margin-top: 25px;
  height: 40px;
  width: 300px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
`;

export const GeneralText = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  opacity: 0.85;
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
  margin-bottom: 24px;
`;

export const Separator = styled.View`
  margin-bottom: 24px;
`;

export const Forgot = styled.View`
  align-self: flex-end;
  margin-top: 5px;
  margin-right: 5px;
`;

export const Create = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
