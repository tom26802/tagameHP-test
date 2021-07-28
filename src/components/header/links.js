import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PlaceIcon from '@material-ui/icons/Place';
import PageviewIcon from '@material-ui/icons/Pageview';
import SchoolIcon from '@material-ui/icons/School';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
import EventNoteIcon from '@material-ui/icons/EventNote';


export const menus= [
  {
    menu:'ホーム',
    icon: <HomeIcon/>,
    path: ''
  },
  {
    menu:'田瓶の人に会う',
    icon: <EmojiPeopleIcon/>,
    path: 'tagamate'
  },
  {
    menu:'田瓶を知る',
    icon: <PlaceIcon/>,
    path: 'info'
  },
  {
    menu:'田瓶ニュース',
    icon: <PageviewIcon/>,
    path: 'news'
  },
  
  ]
  
export const tour= [
  {
    menu:'見る・学ぶ',
    icon: <SchoolIcon/>,
    path: 'info/see'
  },
  {
    menu:'遊ぶ・体験する',
    icon: <SportsHandballIcon/>,
    path: 'info/act'
  },
  {
    menu:'食べる・お土産',
    icon: <RestaurantIcon/>,
    path: 'info/goods'
  },
  {
    menu:'泊まる・温泉',
    icon: <HotelIcon/>,
    path: 'info/hotel'
  },
      {
    menu:'イベント',
    icon: <EventNoteIcon/>,
    path: 'info/event'
  },
  
  ]