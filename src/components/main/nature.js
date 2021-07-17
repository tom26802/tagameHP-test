import React from "react"
import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import Img1 from '../../images/index/nature/step.jpg'
import Img2 from '../../images/index/nature/flower.jpg'
import Img3 from '../../images/index/nature/cat.jpg'
import Img4 from '../../images/index/nature/river.jpg'
import {SSection, SSectionTitle, SCover, SRdiv, SAdiv, CBlack} from '../common/common.js'

const Nature = () => {
    return (
        <SSection>
            <SSectionTitle>田瓶の情景</SSectionTitle>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <SRdiv>
                        <Grid container>
                            <Grid item xs={6}><img src={Img1} alt="river"　style={{width:'100%', display: 'block'}}/></Grid>
                            <Grid item xs={6}><img src={Img2} alt="flower"　style={{width:'100%', display: 'block'}}/></Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}><img src={Img3} alt="cat"　style={{width:'100%', display: 'block'}}/></Grid>
                            <Grid item xs={6}><img src={Img4} alt="river"　style={{width:'100%',display: 'block'}}/></Grid>
                        </Grid>
                        <SCover/>
                        <Skv>
                            <p>工場の煙突から昇る白煙</p>
                            <p>濡れた芝生の匂い</p>
                            <div style={{height:'16px', width:'16px'}}/>
                            <p>街角に佇むお地蔵様</p>
                            <p>ゆうやけこやけのメロディー</p>
                            <div style={{height:'16px', width:'16px'}}/>
                            <p>かみさまに見守られ</p>
                            <p>今日も新しい一日が始まる</p>
                        </Skv>
                    </SRdiv>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SColordiv>
                        <Grid container>
                            <Grid item xs={12} sm={5} md={12}>
                                <SWelcomeMassage>
                                    <SAdiv>
                                        <Grid container><Grid item xs={3}></Grid><Grid item xs={4}><SUndeline/></Grid><Grid item xs={2}><SUndeline/></Grid><Grid item xs={3}></Grid></Grid>
                                        <Grid container><Grid item xs={2}></Grid><Grid item xs={3}><SUndeline/></Grid><Grid item xs={5}><SUndeline/></Grid><Grid item xs={2}></Grid></Grid>
                                        <Grid container><Grid item xs={1}></Grid><Grid item xs={6}><SUndeline/></Grid><Grid item xs={4}><SUndeline/></Grid><Grid item xs={1}></Grid></Grid>
                                        <SWelcome>ようこそ、田瓶へ</SWelcome>
                                        <Grid container><Grid item xs={1}></Grid><Grid item xs={4}><SUndeline/></Grid><Grid item xs={6}><SUndeline/></Grid><Grid item xs={1}></Grid></Grid>
                                        <Grid container><Grid item xs={2}></Grid><Grid item xs={5}><SUndeline/></Grid><Grid item xs={3}><SUndeline/></Grid><Grid item xs={2}></Grid></Grid>
                                        <Grid container><Grid item xs={3}></Grid><Grid item xs={2}><SUndeline/></Grid><Grid item xs={4}><SUndeline/></Grid><Grid item xs={3}></Grid></Grid>
                                        <SWelcomeSub>
                                            <p>駅を降りるとそこは懐かしの国</p>
                                            <p>すべての魂が帰る場所</p>
                                        </SWelcomeSub>
                                    </SAdiv>
                                </SWelcomeMassage>
                            </Grid>
                            <Grid item xs={12} sm={7} md={12}>
                                <SAccess>都心からのアクセス</SAccess>
                                <SUl>
                                    <li>上越新幹線の利用で約2時間10分</li>
                                    <li>東京、新宿発高速バスで約3時間40分</li>
                                    <li>中央道より勝沼ICの先で足引スカイラインへ、上信越道より富岡ICから国道69号線へ</li>
                                </SUl>
                            </Grid>
                        </Grid>
                    </SColordiv>
                </Grid>
            </Grid>
        </SSection>
    )
}


export default Nature

const Skv = styled.div`
    padding:24px;
    font-size:1rem;
    background-color:rgba(255, 255, 255, 0.95);
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index:10;
    box-shadow: 0 0 30px  30px rgba(255, 255, 255, 0.5);

    @media (min-width:960px){
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
    }
    
    @media (max-width:600px){
        font-size:0.8rem;
    }
    
    > p {
        margin:0;
        white-space: nowrap;
    }
`

const SUndeline=styled.div`
    height:1px;
    width:90%;
    background-color:${CBlack};
    margin:4px 8px;
    `

const SWelcomeMassage=styled.div`
        width:100%;
        position:relative;
        height:100%;
        min-height:150px;
`

const SWelcome =styled.div`
    font-size:1.5rem;
    font-weight:bold;
    padding: 8px 0;
`

const SWelcomeSub =styled.div`
    font-size:0.9rem;
    margin-top: 16px;
    
    > p {
        margin:0;
    }
`

const SColordiv =styled.div`
    background-color:white;
    height:100%;
    width:100%;
    text-align:center;
    padding:5%;
    display:flex;
    align-items:center;

    
    > p{
        color:red;
    }
`

const SAccess =styled.div`
    background-color:white;
    display:table;
    padding:6px 8px;
    
    @media (min-width:960px){
        margin-top:32px;
    }

    @media (max-width:600px){
        margin-top:24px;
    }
    
   @media (max-width:960px){
        margin-left:5%;
    }

`

const SUl =styled.ul`
    text-align:left;
    margin-left:2rem;
    margin-bottom:7px;
    
    > li {
        margin-bottom:7px;
    }
    
    
    @media (max-width:600px){
        list-style:none;
    }
    
    @media (max-width:960px){
        margin-right: 10%;
        margin-left: 15%;
    }
`
