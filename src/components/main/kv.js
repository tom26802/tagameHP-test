import React from "react"
import styled from 'styled-components';
import {Grid, Hidden } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import PageviewIcon from '@material-ui/icons/Pageview';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Img1 from '../../images/index/kv/top.jpg'
import {SSection, SRdiv, CWhite, CBeige} from '../common/common.js'


const Kv = () => {
    return (
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
                        <img src={Img1} alt="top"　style={{width:'100%'}}/>
                        <Hidden smDown>
                            <SLinkwap>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={3}><div>リンク<p style={{margin:'0px', fontSize:'0.7rem'}}>(外部サイト)</p></div></Grid>
                                    <Grid item xs={3}><SLink><LocalLibraryIcon/><p>wiki</p></SLink></Grid>
                                    <Grid item xs={3}><SLink><PageviewIcon/><p>News</p></SLink></Grid>
                                    <Grid item xs={3}><SLink><TwitterIcon/><p>Twitter</p></SLink></Grid>
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
                        <Grid item xs={3}><SLink><LocalLibraryIcon/><p>wiki</p></SLink></Grid>
                        <Grid item xs={3}><SLink><PageviewIcon/><p>ニュース</p></SLink></Grid>
                        <Grid item xs={3}><SLink><TwitterIcon/><p>Twitter</p></SLink></Grid>
                    </Grid>
                </SLinkwap>
            </Hidden>
        </SSection>
    )
}



const STopX = styled.div`
    margin:0 0 24px 24px;
    
    > p {
        margin-bottom:0;
        padding-left:8px;
    }
    
    > div {
        font-size:2rem;
        font-weight:bold;
    }
`

const STopY = styled.div`
    margin: 0 auto;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    
    >div {
        font-size:2rem;
        font-weight:bold;
        padding-top:16px;
    }
`

const SLinkwap= styled.div`
    text-align:center;
    width:100%;
    padding:16px;
    
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
    
    > p {
        margin:-8px 0 0 0;
    }
`

export default Kv