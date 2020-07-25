import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import wailterIcon from '../../assets/logo/waiter.svg';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { useAuth } from '../../hooks/auth';
import { useHeader } from '../../hooks/header';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const { showSidebar, hiddenSidebar } = useHeader();

  return (
    <Container>
      <Content>
        <nav>
          <button onClick={showSidebar}>
            <AiOutlineMenu size={28} />
          </button>
          <img src={wailterIcon} width={48} alt="Waiters" />
          <strong>E ai Zé</strong>
          <Link to="/dashboard"></Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Kadmo</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button onClick={signOut}>
              <AiOutlineUser size={28} />
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
