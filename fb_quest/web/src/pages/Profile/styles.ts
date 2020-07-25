import styledComponent from 'styled-components';

import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
//background: linear-gradient(45deg, #943b5e, #d84e55, #fdab72);
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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
  flex-direction: row;
  align-items: center;
  place-content: center;
  width: 100%;


  background: transparent;
  border-radius: 4px;
  margin-top: 25px;
  padding: 25px 15px;
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
  width: 80%;
  margin: 15px;

  form {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 720;
    text-align: center;
  }
`;

export const BusinessData = styledComponent.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  margin: 15px;
  width: 100%;


  }
`;

export const BusinessDataContent = styledComponent.div`
  display: flex;
  flex-direction: row;

  form {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 720;
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
