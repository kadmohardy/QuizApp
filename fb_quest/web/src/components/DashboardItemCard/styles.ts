import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

//background: linear-gradient(45deg, #943b5e, #d84e55, #fdab72);

export const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 15px;

  width: 240px;

  display: flex;
  flex-direction: column;

  margin: 15px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    span {
      font-size: 18px;
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
  border-bottom: '1px solid rgba(0, 0, 0, .125)';

  margin-top: 15px;

  div {
    margin-left: 15px;

    span {
      font-size: 24px;
      font-weight: 300;
    }

    h4 {
      color: #999;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;
