import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from './styles';

import Drawer from '../../components/Drawer';

import { useHeader } from '../../hooks/header';

const Main: React.FC = () => {
  return <Drawer />;
};

export default Main;
