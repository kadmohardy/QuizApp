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
import {
  AiOutlineUser,
  AiOutlineRocket,
  AiOutlineBook,
  AiOutlineCheck,
  AiOutlinePrinter,
} from 'react-icons/ai';

import { Container, Content, Title, Information } from './styles';

import { IconBaseProps } from 'react-icons';

interface DashboardItemCardProps {
  title: string;
  icon: IconBaseProps;
  value: string;
  footer: string;
}

const DashboardItemCard: React.FC<DashboardItemCardProps> = ({
  icon,
  title,
  value,
  footer,
}) => {
  return (
    <Container>
      <Content>
        <Title>
          <div>
            <span>{title}</span>
          </div>
        </Title>
        <Information>
          {icon}
          <div>
            <span>{value}</span>
            <h4>{footer}</h4>
          </div>
        </Information>
      </Content>
    </Container>
  );
};

export default DashboardItemCard;
