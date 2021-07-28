import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {menus, tour} from './links.js'
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import Drawer from '@material-ui/core/Drawer';

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

const MyDrawer=() =>{
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
            <ListItemText primary={item.menu} />
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
            <ListItemText primary={item.menu} />
          </ListItem>
          )
        })}
      </List>
      
      <Divider />
          <ListItem button>
            <ListItemIcon><LinkIcon/></ListItemIcon>
            <ListItemText primary={'関連サイト'} />
          </ListItem>
    </div>
  );

  return(
     <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    )
}

export default MyDrawer