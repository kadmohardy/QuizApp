import React, { useCallback, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  CssBaseline,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlineLogout,
  AiOutlineUser,
  AiFillBook,
} from 'react-icons/ai';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import RootState from '../../store/modules/rootState';
import { ProfileState } from '../../store/modules/user/types';

import {
  Profile,
  TopToolbar,
  TopBar,
  StatusContainer,
  StatusButton,
} from './styles';
import logo from '../../assets/logo/logo.png';

import { signOut } from '../../store/modules/auth/actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const menuItems = [
  { name: 'Dashboard', icon: <AiOutlineDashboard size={24} /> },
];

const icons = [<AiOutlineSetting size={24} />, <AiOutlineLogout size={24} />];

const MiniDrawer: React.FC = ({ children }) => {
  const profile = useSelector((state: RootState) => state.user.profile);
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch, signOut]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSuperiorButtonClick = useCallback((buttonId: number) => {
    switch (buttonId) {
      case 0:
        history.push('/dashboard');
        break;

      case 4:
        break;

      default:
        break;
    }
  }, []);

  const handleInferiorButtonClick = useCallback((buttonId: number) => {
    console.log(buttonId);
    switch (buttonId) {
      case 0:
        history.push('/profile');
        break;

      case 1:
        handleSignOut();
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <TopToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            {/* <MenuIcon /> */}
            <img src={logo} width={72} alt="FBQuest" />
          </IconButton>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
          </Profile>
        </TopToolbar>
      </TopBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          {/* <img src={wailterIcon} width={36} alt="Waiters" /> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={(key) => handleSuperiorButtonClick(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Perfil', 'Sair'].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={(key) => handleInferiorButtonClick(index)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <AiOutlineUser size={28} />
                ) : (
                  <AiOutlineLogout size={24} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default MiniDrawer;
