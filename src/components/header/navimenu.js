import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import List from '@material-ui/core/List';
import Popover from "@material-ui/core/Popover";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/Map';

import {fontStyle} from '../common/variables.js'
import {tour} from './links.js'

const NaviMenu = ({name, path})=>{
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  
  if(name==="田瓶を知る"){
  
    return (
      <Smenu>
            <Button style={fontStyle} aria-describedby={id} onClick={handleClick}>{name}</Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <SPopover>
                    <List>
                        {tour.map((item)=>{
                          return(
                            <ListItem button key={item.menu} component="a" href={"/"+item.path}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={<Typography style={fontStyle}>{item.menu}</Typography>} />
                            </ListItem>
                             )
                        })}
                            <Divider />
                            <ListItem button component="a" href={"/info"}>
                                <ListItemIcon><MapIcon/></ListItemIcon>
                                <ListItemText primary={<Typography style={fontStyle}>田瓶の見どころ</Typography>} />
                            </ListItem>
                    </List>
              </SPopover>
            </Popover>
      </Smenu>
    )
  }
  
  return(
          <Smenu>
                <Button style={fontStyle} component={Link} to={"/"+path}>{name}</Button>
        </Smenu>
        )
}

export default NaviMenu

const Smenu=styled.div`
    text-align:center;
    width:160px;
    border-left:1px solid #333;
`

const SPopover=styled.div`
    padding:16px;
`