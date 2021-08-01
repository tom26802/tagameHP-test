import React from "react"
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

import {Grid, Hidden } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import PageviewIcon from '@material-ui/icons/Pageview';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

import {SRdiv} from '../common/div.js'
import {SSection} from '../common/section.js'
import {CWhite, CBeige} from '../common/variables.js'
import {STopX, STopY} from '../common/kvmsg.js'
import {FadeContent} from '../common/motion.js'

const linkMenu=[
    {
        icon:<LocalLibraryIcon/>,
        text:'wiki',
        url:'https://rokkotsumikan.com/tagame_wiki/'
    },
    {
        icon:<PageviewIcon/>,
        text:'news',
        url:'/news'
    },
    {
        icon:<TwitterIcon/>,
        text:'twitter',
        url:'https://twitter.com/tagame_kankou'
    }
    ]

const Kv = () => {
    
    return (
        <FadeContent>
        <SSection>
            <Hidden mdUp>
                <STopX>
                    <p>今ではないいつか</p>
                    <p>ここではないどこか</p>
                    <div>水と空気の街、田瓶市</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={10}>
                    <SRdiv>
                        <StaticImage src='../../images/index/kv/top.jpg' alt='top'/>
                        <Hidden smDown>
                            <SLinkwap>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={3}><div>リンク<p style={{margin:'0px', fontSize:'0.7rem'}}>(外部サイト)</p></div></Grid>
                                    {linkMenu.map((item)=>{
                                        return(
                                        <Grid item xs={3}>
                                            <SButton href={item.url}>
                                                <SLink>
                                                    {item.icon}
                                                    <p>{item.text}</p>
                                                </SLink>
                                            </SButton>
                                        </Grid>
                                        )
                                    })}
                                </Grid>
                                
                            </SLinkwap>
                        </Hidden>
                    </SRdiv>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={2}>
                        <STopY>
                            <p>今ではないいつか</p>
                            <p>ここではないどこか</p>
                            <div> 水と空気の街、田瓶市</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
            <Hidden mdUp>
                <SLinkwap>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={3}><div>リンク<p style={{margin:'0px', fontSize:'0.7rem'}}>(外部サイト)</p></div></Grid>
                        {linkMenu.map((item)=>{
                            return(
                            <Grid item xs={3}>
                                <SButton>
                                    <SLink>
                                        {item.icon}
                                        <p>{item.text}</p>
                                    </SLink>
                                </SButton>
                            </Grid>
                            )
                        })}
                    </Grid>
                </SLinkwap>
            </Hidden>
        </SSection>
        </FadeContent>
    )
}




const SLinkwap= styled.div`
    text-align:center;
    width:100%;
    padding:4px 16px;
    
    @media (min-width:960px){
        width:50%;
        background-color:${CWhite};
        position:absolute;
        left:0;
        bottom:0;
    }
`

const SLink = styled.div`
    background-color:${CBeige};
    padding: 4px 0;
    width:100%;
    
    > p {
        margin:-8px 0 0 0;
    }
`

const SButton=styled(Button)`
    padding:0px 2px;
    margin:4px 0px;
    width:100%;
    text-transform: none;
    font-family:"Yu Mincho", "Merriweather", "Georgia", Cambria, "Times New Roman";
`

export default Kv

