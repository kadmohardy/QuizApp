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

import {
  Container,
  Content,
  Client,
  Address,
  Status,
  Information,
} from './styles';

import Drawer from '../../components/Drawer';

import { useHeader } from '../../hooks/header';

const OrderCard: React.FC = () => {
  return (
    <Container>
      <Content>
        <Client>
          <AiOutlineUser size={24} />
          <div>
            <span>Kadmo</span>
            <h4>(88) 98121-1212</h4>
          </div>
        </Client>
        <Address>
          <AiOutlineRocket size={24} />
          <div>
            <span>Rua Desembargador Moreira da Rocha, 223</span>
            <h4>Tempo de entrega: 40-60min</h4>
          </div>
        </Address>
        <Status>
          <AiOutlineBook size={24} />
          <div>
            <span>lido por: Park Chopp - Sobral - Renan</span>
            <h4>03/05 - 20:26</h4>
          </div>
        </Status>
        <Information>
          <h3>R$48,90</h3>
          <div>
            <button>
              <AiOutlineRocket size={18} />
            </button>
            <button>
              <AiOutlinePrinter size={18} />
            </button>
            <button>
              <AiOutlineCheck size={18} />
            </button>
          </div>
        </Information>
      </Content>
    </Container>
  );
};

export default OrderCard;
