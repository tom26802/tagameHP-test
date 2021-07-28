import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
}));

const NavMenuItems = [
  {name:'ホーム', path:''},
  {name:'田瓶を知る', path:'info'},
  {name:'田瓶の人に会う', path:'tagamate'},
  {name:'田瓶ニュース', path:'news'}
  ]

const NaviMenu = ({name, path})=>{
  return (
      <Smenu>
        <Link to={"/"+path}>{name}</Link>
      </Smenu>
  )
}



export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div position="static">
        <Toolbar>
          <div className={classes.title}>
            田瓶市観光情報局
          </div>
          {NavMenuItems.map((item)=>(<NaviMenu key={item.name} name={item.name} path={item.path} />))}
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </div>
    </div>
  );
}

const Smenu=styled.div`
    text-align:center;
    width:160px;
    border-left:1px solid #333;
`