import styled from 'styled-components';

//background: linear-gradient(45deg, #943b5e, #d84e55, #fdab72);

export const Container = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 15px;

  min-width: 320px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Client = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: '1px solid rgba(0, 0, 0, .125)';
  div {
    margin-left: 15px;

    span {
      font-size: 18px;
      font-weight: 500;
    }

    h4 {
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: '1px solid rgba(0, 0, 0, .125)';

  margin-top: 15px;

  div {
    margin-left: 15px;

    span {
      font-size: 14px;
      font-weight: 300;
    }

    h4 {
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  div {
    margin-left: 15px;

    span {
      font-size: 14px;
      font-weight: 300;
    }

    h4 {
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;
  padding: 5px;

  h3 {
    font-size: 24px;
    font-weight: bold;
  }

  div {
    margin-left: 15px;

    button {
      margin-left: 5px;
      padding: 5px;
      border-radius: 4px;
      border-color: #d84e55;
    }
  }
`;
