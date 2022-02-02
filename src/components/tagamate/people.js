import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';

import {Grid } from '@material-ui/core'

import {SSection, SCopy} from '../common/section.js'
import {SSideTitle} from '../common/sidetitle.js'
import {FadeContent} from '../common/motion.js'

import Img1 from '../../images/index/people/yago.jpg'
import Img2 from '../../images/index/people/etori.jpg'
import Img3 from '../../images/index/people/hashimoto.jpg'
import Img4 from '../../images/index/people/kimura.jpg'
import Img5 from '../../images/index/people/oizumi.jpg'
import Img6 from '../../images/index/people/tanigawa.jpg'
import Img7 from '../../images/index/people/iida.jpg'
import Img8 from '../../images/index/people/urakawa.jpg'
import Img9 from '../../images/index/people/watabe.jpg'
import Img10 from '../../images/index/people/murata.jpg'
import Img11 from '../../images/index/people/utakata.jpg'
import Img12 from '../../images/index/people/sakurai.jpg'



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
    },
    {
        img:Img7,
        title:'「おかよたか」生産者',
        message:'常に新たな発見を',
        name:'飯田 かなえ',
        roman:'Kanae Iida'
    },
    {
        img:Img8,
        title:'毛総新聞　文化部',
        message:'活字に命を吹き込む',
        name:'浦川 麗子',
        roman:'Reiko Urakawa'
    },
    {
        img:Img9,
        title:'ベンチャー起業家',
        message:'アイデアを形に',
        name:'渡部 学',
        roman:'Manabu Watabe'
    },
    {
        img:Img10,
        title:'山野辺総合病院医師',
        message:'対話から信頼を',
        name:'村田 桔平',
        roman:'Kippei Murata'
    },
    {
        img:Img11,
        title:'小説家、評論家',
        message:'動画より鮮やかに',
        name:'UTAKATA',
        roman:'Utakata'
    },
    {
        img:Img12,
        title:'フォーリッジ事業統括',
        message:'人工知能の活用',
        name:'ジェフ サクライ',
        roman:'Jeff Sakurai'
    }
    ]

const Tagamate = ({img, title, message, name, roman})=>{
    console.log(img)
    return(

        <Grid item xs={12} sm={6} lg={4}>
        <FadeContent>
            <Link to={`/tagamate/${roman.split(' ').pop()}/`}>
                <SPeopleWrap>
                    <img src={img} alt={roman}/>
                        <div>{title}</div>
                        <p>{message}</p>
                        <span>{name}</span><i>{roman}</i>
                </SPeopleWrap>
            </Link>
        </FadeContent>
        </Grid>
    )
} 

const People= () => {
    return (
        <FadeContent>
        <SSection right>
            <h1>田瓶の人に会う</h1>
            <Grid container>
                <Grid item xs={3}>
                    <SSideTitle>
                        <ul>
                            <li><p>独特の文化が育む人間模様</p></li>
                            <li><span>Story of TAGAMATE</span></li>
                        </ul>
                    </SSideTitle>
                </Grid>
                <Grid item xs={9}>
                    <SCopy right>
                        江戸時代から続く匠の技<br />
                        郊外のゆとりが育む感性<br />
                        夢見る神の子が作る街
                    </SCopy>
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
        </FadeContent>
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


export default People