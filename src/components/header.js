import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Hidden } from '@material-ui/core';
import NaviMenu from './header/navimenu.js'
import {menus, tour} from './header/links.js'
import {fontStyle} from './common/variables.js'
import Typography from "@material-ui/core/Typography";

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';


// Style定義
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
    list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))



export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
    const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        {menus.map((item)=>{
          return(
          <ListItem button key={item.menu}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={<Typography style={fontStyle}>{item.menu}</Typography>} />
          </ListItem>
          )
        })}
      </List>

      <Divider />
      
      <List>
        {tour.map((item)=>{
          console.log(item.menu)
          return(
          <ListItem button key={item.menu}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={<Typography style={fontStyle}>{item.menu}</Typography>} />
          </ListItem>
          )
        })}

      </List>
      
      <Divider />
          <ListItem button>
            <ListItemIcon><LinkIcon/></ListItemIcon>
            <ListItemText primary={<Typography style={fontStyle}>関連サイト</Typography>} />
          </ListItem>

    </div>
  );
  
  return (
    <div className={classes.root}>
      <div position="static">
        <Toolbar>
          <div className={classes.title}>
            田瓶市観光情報局
          </div>
        <Hidden smDown>
          {menus.map((item)=>(<NaviMenu key={item.menu} name={item.menu} path={item.path} />))}
        </Hidden>
        <Hidden mdUp>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
              <MenuIcon />
          </IconButton>
        </Hidden>
        </Toolbar>
      </div>
    <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
      {list('right')}
    </Drawer>
    </div>
  );
}

