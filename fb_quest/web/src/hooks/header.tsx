import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface HeaderState {
  isShowSidebar?: boolean;
}

interface HeaderContextData {
  isShowSidebar?: boolean;
  showSidebar(): void;
  hiddenSidebar(): void;
}

const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

export const HeaderProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<HeaderState>(() => {
    return { isShowSidebar: false };
  });

  const showSidebar = useCallback(() => {
    setData({ isShowSidebar: true });
  }, []);

  const hiddenSidebar = useCallback(() => {
    setData({ isShowSidebar: false });
  }, []);

  return (
    <HeaderContext.Provider
      value={{ isShowSidebar: data.isShowSidebar, showSidebar, hiddenSidebar }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export function useHeader(): HeaderContextData {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
