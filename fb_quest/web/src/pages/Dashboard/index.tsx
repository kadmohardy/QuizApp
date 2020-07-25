import React, { useCallback } from 'react';

import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaStar, FaBookmark } from 'react-icons/fa';
import {
  Container,
  Header,
  LastDayInformationItems,
  ExpansionPanelDetails,
  OrdersNumber,
  ListItems,
  EvaluationsList,
  NavigationButtons,
} from './styles';
import {
  AiOutlineDashboard,
  AiOutlineClose,
  AiOutlineTag,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';

import { MdChildCare } from 'react-icons/md';

import DashboardItemCard from './../../components/DashboardItemCard';
import EvaluationCard from './../../components/EvaluationCard';

const Dashboard: React.FC = () => {
  // const [expanded, setExpanded] = React.useState('panel1');

  return (
    <Container>
      <Header>
        <AiOutlineDashboard size={18} />
        <span>Dashboard</span>
      </Header>
      <LastDayInformationItems>
        <ListItems>
          <DashboardItemCard
            title="Pedidos recebidos"
            icon={<FaBookmark size={48} color="#d84e55" />}
            value="12"
            footer="pedidos recebidos"
          />
          <DashboardItemCard
            title="Pedidos cancelados"
            icon={<AiOutlineClose size={48} color="#d84e55" />}
            value="12"
            footer="pedidos cancelados"
          />
          <DashboardItemCard
            title="Ticket médio"
            icon={<AiOutlineTag size={48} color="#d84e55" />}
            value="R$42,50"
            footer="ticket médio"
          />
        </ListItems>
      </LastDayInformationItems>
      <LastDayInformationItems>
        <ListItems>
          <DashboardItemCard
            title="Avaliação média"
            icon={<FaStar size={48} color="#d84e55" />}
            value="12"
            footer="pedidos recebidos"
          />
          <DashboardItemCard
            title="Como está a comida?"
            icon={<FaStar size={48} color="#d84e55" />}
            value="12"
            footer="pedidos cancelados"
          />
          <DashboardItemCard
            title="Tempo de entrega"
            icon={<FaStar size={48} color="#d84e55" />}
            value="R$42,50"
            footer="ticket médio"
          />
          <DashboardItemCard
            title="Pedidos com erros"
            icon={<FaStar size={48} color="#d84e55" />}
            value="R$42,50"
            footer="ticket médio"
          />
        </ListItems>
      </LastDayInformationItems>
      <EvaluationsList>
        <h3>Ultimas avalições</h3>
        {/* <ListItems>
          <EvaluationCard
            user="Gusttavo"
            food="Camarão internacional"
            comment="Muito bom"
            avatar={gusttavo}
          />
          <EvaluationCard
            user="Xand"
            food="Camarão na moranga"
            comment="Excelente"
            avatar={xand}
          />
          <EvaluationCard
            user="Marilia"
            food="Pizza"
            comment="Pizza muito boa"
            avatar={marilia}
          />
        </ListItems> */}

        <NavigationButtons>
          <button>
            <AiOutlineLeft size={24} />
          </button>
          <button>
            <AiOutlineRight size={24} />
          </button>
        </NavigationButtons>
      </EvaluationsList>
    </Container>
  );
};

export default Dashboard;
