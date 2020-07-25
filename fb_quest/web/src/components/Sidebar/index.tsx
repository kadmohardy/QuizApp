import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import wailterIcon from '../../assets/logo/waiter.svg';
import { useAuth } from '../../hooks/auth';
import parkchopp from '../../assets/images/parkchopp.jpg';

import {
  AiOutlineDashboard,
  AiOutlineBook,
  AiOutlineBarChart,
  AiOutlineShop,
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlineLogout,
} from 'react-icons/ai';

import { useHeader } from '../../hooks/header';

const Sidebar: React.FC = () => {
  const { isShowSidebar } = useHeader();
  const { signOut } = useAuth();
  console.log(isShowSidebar);
  return (
    <Container show={isShowSidebar || false}>
      <Content>
        <nav>
          <ul>
            <li>
              <button>
                <AiOutlineDashboard size={24} />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button>
                <AiOutlineBook size={24} />
                <span>Pedidos</span>
              </button>
            </li>
            <li>
              <button>
                <AiOutlineShop size={24} />
                <span>ParkChopp</span>
              </button>
            </li>
            <li>
              <button>
                <AiOutlineBarChart size={24} />
                <span>Relatórios</span>
              </button>
            </li>
            <li>
              <button>
                <AiOutlineStar size={24} />
                <span>Avaliações</span>
              </button>
            </li>
            <li>
              <button>
                <AiOutlineSetting size={24} />
                <span>Configurações</span>
              </button>
            </li>
            <li>
              <button onClick={signOut}>
                <AiOutlineLogout size={24} />
                <span>Sair</span>
              </button>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
};

export default Sidebar;
