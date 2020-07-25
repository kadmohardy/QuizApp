import styled from 'styled-components';

//background: linear-gradient(45deg, #943b5e, #d84e55, #fdab72);

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);

  background: #ffffff;
  border-radius: 4px;
  padding: 15px;

  width: 480px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin: 15px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 15px;

  span {
    font-size: 16px;
    font-weight: 300;
  }

  h4 {
    color: #999;
    font-size: 14px;
    font-weight: 300;
  }
`;

export const Scores = styled.div`
  margin-left: 140px;
  display: flex;
`;

export const Avatar = styled.div`
  margin-right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 36px;

  img {
    margin-left: 4px;
    height: 64px;
    width: 64px;
    border-radius: 32px;
  }
`;

export const User = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
      font-weight: 500;
    }
  }
`;

export const Time = styled.div`
  background: #d84e55;
  padding: 4px 8px;
  border-radius: 24px;
  display: flex;

  h3 {
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const InformationItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;

  span {
    font-weight: 500;
    font-size: 14px;
  }

  h4 {
    margin-left: 15px;
    font-color: #000000;
    font-weight: 300;
    font-size: 14px;
  }
`;
