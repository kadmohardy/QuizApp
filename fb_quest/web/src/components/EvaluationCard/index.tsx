import React from 'react';
import { Link } from 'react-router-dom';
import manAvatar from './../../assets/images/man1.png';
import womanAvatar from './../../assets/images/woman-avatar.png';

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
  Header,
  Information,
  Scores,
  User,
  Avatar,
  Time,
  InformationItem,
} from './styles';
import { FaStar } from 'react-icons/fa';

import { IconBaseProps } from 'react-icons';

interface EvaluationCardProps {
  user: string;
  avatar: string;
  food: string;
  comment: string;
}

const EvaluationCard: React.FC<EvaluationCardProps> = ({
  user,
  avatar,
  food,
  comment,
}) => {
  return (
    <Container>
      <Content>
        <Header>
          <User>
            <Avatar>
              <img src={avatar} alt="ManAvatar" />
            </Avatar>
            <div>
              <span>{user}</span>
              <Time>
                <h3>04/04 21:35</h3>
              </Time>
            </div>
          </User>
          <Scores>
            <FaStar color="#F1DB15" size={24} />
            <FaStar color="#F1DB15" size={24} />
            <FaStar color="#F1DB15" size={24} />
            <FaStar color="#F1DB15" size={24} />
            <FaStar color="#F1DB15" size={24} />
          </Scores>
        </Header>
        <Information>
          <InformationItem>
            <span>Pediu</span>
            <h4>{food}</h4>
          </InformationItem>
          <InformationItem>
            <span>A comida está</span>
            <h4>
              Muito asudhuashdu asudhuashdhaushdu askdmaksdoamsd aushduashduhasd
              kasdmoa tehuashduh kasdkmaksd kasdmasdij
            </h4>
          </InformationItem>
        </Information>
      </Content>
    </Container>
  );
};

export default EvaluationCard;
