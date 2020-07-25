import React from 'react';
import { Link } from 'react-router-dom';
import wailterIcon from '../../assets/logo/waiter.svg';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { useAuth } from '../../hooks/auth';
import { useHeader } from '../../hooks/header';
import { TopBar, TopToolbar, Profile } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const { showSidebar, hiddenSidebar } = useHeader();

  return (
    <TopBar>
      <TopToolbar>
        <nav>
          <button>
            <AiOutlineMenu size={28} />
          </button>
          <img src={wailterIcon} width={36} alt="Waiters" />
          {/* <strong>E ai Zé</strong> */}
          <Link to="/dashboard"></Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Kadmo</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button>
              <AiOutlineUser size={28} />
            </button>
          </Profile>
        </aside>
      </TopToolbar>
    </TopBar>
  );
};

export default Header;
