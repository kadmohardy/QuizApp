import styledComponent from 'styled-components';

import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
//background: linear-gradient(45deg, #943b5e, #d84e55, #fdab72);
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Modal from '@material-ui/core/Modal';

import GridList from '@material-ui/core/GridList';

export const Container = styledComponent.div`
  display: flex;
  flex-direction: column;
  align-items: strech;
`;

export const Header = styledComponent.div`
  display: flex;
  flex-direction: row;

  span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.7;
  }
`;

export const Content = styledComponent.div`
  display: flex;
  flew-grow: 1;
  flex-wrap: wrap;
`;

export const OrdersNumber = styledComponent.text`
  color: #d84e55;
  margin-right: 15px;
  font-size: 18px;
`;

export const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
  },
}))(MuiExpansionPanelDetails);

export const ListItems = styled(GridList)({
  border: 0,
  borderRadius: 3,
  padding: '0 30px',
});

export const LastDayInformationItems = styledComponent.div`
  display: flex;
  flew-grow: 1;
  flex-wrap: wrap;
`;

export const EvaluationsList = styledComponent.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 4px;
  padding: 10px;
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  h3 {
    font-weight: 300;
  }
`;

export const NavigationButtons = styledComponent.div`  
  button {
    margin: 5px;
    background: transparent;
    border: 0;
  }
`;
