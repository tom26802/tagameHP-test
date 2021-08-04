import React from "react"
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import {Grid } from '@material-ui/core';

import {SCover} from '../common/div.js'
import {SSection, SCopy} from '../common/section.js'
import {SSideTitle} from '../common/sidetitle.js'
import {FadeContent} from '../common/motion.js'

const Tour= () => {
    return (
        <FadeContent>
        <SSection>
            <h1>田瓶の魅力</h1>
        
            <Grid container>
                <Grid item xs={9}>
                    <FadeContent>
                    <SCopy>
                        真殿山と赤川が織りなす大自然<br />
                        古来から続く信仰と文化が創り出した史跡と郷土料理<br />
                        訪れる人すべての心と身体を癒す憩いの場所
                    </SCopy>
                    </FadeContent>
                    <FadeContent>
                    <Link to='/info/see'>
                        <SMenu>
                            <SHov>
                                <StaticImage src='../../images/index/tour/tour_1_see.jpg' alt="see"/>
                            </SHov>
                            <SCover />
                            <SMenuMessage>
                                <span>SightSeeing</span>
                                <p>見る・遊ぶ</p>
                            </SMenuMessage>
                        </SMenu>
                    </Link>
                    </FadeContent>
                    <FadeContent>
                    <Link to='/info/act'>
                        <SMenu>
                            <SHov>
                                <StaticImage src='../../images/index/tour/tour_2_activty.jpg' alt="act"/>
                            </SHov>
                            <SCover />
                            <SMenuMessage>
                                <span>Activity</span>
                                <p>遊ぶ・体験する</p>
                            </SMenuMessage>
                        </SMenu>
                    </Link>
                    </FadeContent>
                    <FadeContent>
                    <Link to='/info/food'>
                        <SMenu>
                            <SHov>
                                <StaticImage src='../../images/index/tour/tour_3_food.jpg' alt="food"/>
                            </SHov>
                            <SCover />
                            <SMenuMessage>
                                <span>Goumet & Souvenir</span>
                                <p>食べる・お土産</p>
                            </SMenuMessage>
                        </SMenu>
                    </Link>
                    </FadeContent>
                    <FadeContent>
                    <Link to='/info/hotel'>
                        <SMenu>
                            <SHov>
                                <StaticImage src='../../images/index/tour/tour_4_hotel.jpg' alt="hotel"/>
                            </SHov>
                            <SCover />
                            <SMenuMessage>
                                <span>Hotel & Spa</span>
                                <p>泊まる・温泉</p>
                            </SMenuMessage>
                        </SMenu>
                    </Link>
                    </FadeContent>
                    <FadeContent>
                    <Link to='/info/event'>
                        <SMenu>
                            <SHov>
                                <StaticImage src='../../images/index/tour/tour_5_event.jpg' alt="event"/>
                            </SHov>
                            <SCover />
                            <SMenuMessage>
                                <span>Events</span>
                                <p>お祭り・催事</p>
                            </SMenuMessage>
                        </SMenu>
                    </Link>
                    </FadeContent>
                </Grid>
                <Grid item xs={3}>
                    <SSideTitle><ul>
                            <li><span>Dreaming of TAGAME City</span></li>
                            <li><p>田瓶で過ごすひととき</p></li>
                        </ul>
                    </SSideTitle>
                </Grid>
            </Grid>
        </SSection>
        </FadeContent>
    )
}

const SMenu=styled.div`
    width:80%;
    margin-top:32px;
    margin-left:20%;
    margin-bottom:15px;
    position:relative;
    overflow:hidden;
    cursor:pointer;
    
    :hover &{}
`

const SHov=styled.div`
    transition:1s;
    
    ${SMenu}:hover &{
        transform:scale(1.2,1.2);
        transition:1s;
    }
`

const SMenuMessage=styled.div`
    color:white;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    padding-left:16px;
    
    > p {
        font-size:1.2rem;
        margin:0;

        @media (min-width: 960px) {
        font-size:2rem;
        }
    }
    
    > span {
        font-size:0.8rem;
        
        @media (min-width: 960px) {
        font-size:1rem;
        }
    }
`

export default Tour