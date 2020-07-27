import styledComponent from 'styled-components';

export const Container = styledComponent.div`
  display: flex;
  flex-direction: column;
  align-items: strech;
  flex-grow: 1;
`;

export const Header = styledComponent.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.7;
  }
`;

export const Content = styledComponent.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  place-content: center;
  width: 100%;

  background: transparent;
  border-radius: 4px;
  margin-top: 25px;
  padding: 5px 5px;
`;

export const Title = styledComponent.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  display: flex;

  span {
    margin: 15px 15px;

    font-size: 18px;
  }
`;

export const FormGroup = styledComponent.div`
  margin-top: 5px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const AdminData = styledComponent.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  width: 50%;

  form {
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    text-align: center;
  }
`;

export const DataContainer = styledComponent.div`
  display: flex;
  flex-direction: column;

  span {
    margin-left: 15px;
    margin-top: 15px;
    font-size: 16px;
  }
`;
