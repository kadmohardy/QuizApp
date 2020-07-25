import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
// import signInBackgroundImage from '../../assets/images/welcome5.png';

export const Container = styled.div`
  background: #ffffff;
  height: 100vh;
  display: flex;
  align-items: strech;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 500px;
`;

// background-size: cover;
export const Background = styled.div`
  background: #1e66ab;
  box-shadow: 2px 2px 10px 10px #c9c9c9;
  -webkit-box-shadow: 2px 2px 10px 10px #c9c9c9;
  -moz-box-shadow: 2px 2px 10px 10px #c9c9c9;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-size: cover;
  margin-buttom: 25px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-size: cover;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: #ffffff;
    font-size: 64px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  h1 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 100;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  span {
    color: #ffffff;
    font-size: 46px;
  }

  h4 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    opacity: 0.7;
  }

  a.button {
    width: 150px;
    margin-top: 25px;
    text-decoration: none;
    color: #ffffff;
    border-color: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-radius: 24px;
    padding: 12px;
    opacity: 0.9;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;

  span {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    h5 {
      font-size: 14px;
      font-weight: 100;
      margin-bottom: 24px;
    }

    a {
      color: #262626;
      justify-self: flex-end;
      display: block;
      font-weight: 300;
      font-size: 12px;
      margin-top: 10px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f1f1f1')};
      }
    }
  }

  > a {
    color: #262626;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f1f1f1')};
    }

    svg {
      margin-right: 8px;
    }
  }

  h3 {
    font-weight: 300;
  }
`;
