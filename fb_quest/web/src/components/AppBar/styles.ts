import { styled } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import styledComponent from 'styled-components';

export const TopBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #943b5e, #d84e55, #fdab72)',
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
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }

  button {
    border: 0;
    background: transparent;
  }
`;
