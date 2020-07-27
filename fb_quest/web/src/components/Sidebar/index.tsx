import React from 'react';
import { Container, Content } from './styles';
import { useAuth } from '../../hooks/auth';

import {
  AiOutlineDashboard,
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
