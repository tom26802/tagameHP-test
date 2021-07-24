import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import {Grid } from '@material-ui/core';
import {SSection} from '../common/common.js'
import Img1 from '../../images/index/people/yago.jpg'
import Img2 from '../../images/index/people/etori.jpg'
import Img3 from '../../images/index/people/hashimoto.jpg'
import Img4 from '../../images/index/people/kimura.jpg'
import Img5 from '../../images/index/people/oizumi.jpg'
import Img6 from '../../images/index/people/tanigawa.jpg'

const Tagamates = [
    {
        img:Img1,
        title:'田瓶市長',
        message:'田瓶史の案内人',
        name:'矢後 源五郎',
        roman:'Gengoroh Yago'
    },
    {
        img:Img2,
        title:'沼田ホテル女将',
        message:'最高のもてなしを',
        name:'餌取 京子',
        roman:'Kyoko Etori'
    },
    {
        img:Img3,
        title:'村田工業 都市開発担当',
        message:'安全/快適な街造り',
        name:'橋本 道夫',
        roman:'Michio Hashimoto'
    },
    {
        img:Img4,
        title:'「椿の会」会長',
        message:'シニアの力の集結',
        name:'木村 茂',
        roman:'Shigeru Kimura'
    },
    {
        img:Img5,
        title:'政治家・実業家',
        message:'田瓶市政の風雲児',
        name:'大泉 薔薇彦',
        roman:'Barahiko Ohizumi'
    },
    {
        img:Img6,
        title:'田瓶競馬場　調教師',
        message:'動物と生きる',
        name:'谷川 加奈子',
        roman:'Kanako Tanigawa'
    }
    ]
    
const Tagamate = ({img, title, message, name, roman})=>{

    return(
        <Grid item xs={12} sm={6} lg={4}>
            <Link to={'/tagamate'+`/${roman.split(' ').pop()}/`}>
                <SPeopleWrap>
                    <img src={img} alt={roman}/>
                        <div>{title}</div>
                        <p>{message}</p>
                        <span>{name}</span><i>{roman}</i>
                </SPeopleWrap>
            </Link>
        </Grid>
    )
} 


const People= () => {
    return (
        <SSection>
            <SSectionTitle right>田瓶の人に会う</SSectionTitle>
            <Grid container>
                <Grid item xs={3}>
                    <SCredit>
                        <ul>
                            <li><p>独特の文化が育む人間模様</p></li>
                            <li><span>Story of TAGAMATE</span></li>
                        </ul>
                    </SCredit>
                </Grid>
                <Grid item xs={9}>
                    <SSectionDiscription right>
                        江戸時代から続く匠の技<br />
                        郊外のゆとりが育む感性<br />
                        夢見る神の子が作る街
                    </SSectionDiscription>
                    <Grid container>
                        {Tagamates.map((item)=>{
                            return(
                                <Tagamate key={item.roman} img={item.img} title={item.title} message={item.message} name={item.name} roman={item.roman}/>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </SSection>
    )
}

const SPeopleWrap=styled.div`
    margin:0 auto;
    width:80%;
    margin-top:60px;
    
    > img {
        width:80%;
    }
    
    > div {
        margin:0;
        font-weight:bold;
        padding-left:16px;
    }
    
    > p {
        margin:4px 0;
        font-size:1.5rem;
        padding-left:16px;
        
    }
    
    > span {
        font-weight: normal;
        padding-left:16px;
        display:block;
     
        @media (min-width:960px){
        display:inline;
    }
    }
    
    > i {
        padding-left:16px;
    }
`

//ここから
const SSectionDiscriptionStyle = styled.div`
    margin-bottom:24px;
    padding-left:10%;
    padding-right:10%;
    
    text-align: ${props=>props.right ? 'right' : 'left'};
    
    @media (min-width: 600px) {
        font-size:1.2rem;
    }
`

export const SSectionDiscription = (props)=>{

    return(
        <SSectionDiscriptionStyle right={props.right}>
            {props.children}
        </SSectionDiscriptionStyle>
        )
}

const SSectionTitleStyle = styled.div`
    font-size:2rem;
    color:${CGray};
    margin-bottom:24px;
    margin-left:5%;
    margin-right:5%;
    text-align: ${props=>props.right ? 'right' : 'left'};

    @media (min-width: 600px) {
        font-size:5rem;
    }
`

export const SSectionTitle = (props)=>{

    return(
        <SSectionTitleStyle right={props.right}>
            {props.children}
        </SSectionTitleStyle>
        )
}


const SCreditStyle= styled.div`
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    width:100%;
    position: sticky;
    top:0;
    display: flex;
    align-items: center;
    
    > ul {
        list-style:none;
        margin-top:16px;

        > li {
            > p {
                font-size:2rem;
                font-weight:bold;
                
                @media (min-width: 600px) {
                    font-size:3rem;
                }
            }
            
            > span {
                font-size:0.8rem;
                
                @media (min-width: 600px) {
                    font-size:1rem;
                }
            }

        }
    }
`

export const SCredit= ({children})=>{
    
    return(
        <SCreditStyle>
            {children}
        </SCreditStyle>
        )
}

//ここまで



export default People