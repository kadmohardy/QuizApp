import { styled } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import styledComponent from 'styled-components';
import Switch from '@material-ui/core/Switch';

export const TopBar = styled(AppBar)({
  background: '#1e66ab',
});

export const TopToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Profile = styledComponent.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #ffffff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #ffffff;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }

  button {
    margin-left: 15px;
    border: 0;
    background: transparent;
  }
`;

export const ExpasionItem = styled(Switch)({});
