import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core';
import {SSection, SSectionTitle,SCredit, SSectionDiscription} from '../common/common.js'
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
import Img11 from '../../images/index/people/watarai.jpg'
import Img12 from '../../images/index/people/hosokawa.jpg'

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
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img1} alt="yago"/>
                                <div>田瓶市長</div>
                                <p>田瓶史の案内人</p>
                                <span>矢後 源五郎</span><i>Gengoroh Yago</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img2} alt="etori"/>
                                <div>沼田ホテル 4代目女将</div>
                                <p>最高のもてなしを</p>
                                <span>餌取 京子</span><i>Kyoko Etori</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img3} alt="hashimoto"/>
                                <div>村田工業 都市開発担当</div>
                                <p>安全/快適な街造り</p>
                                <span>橋本 道夫</span><i>Michio Hashimoto</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img4} alt="kimura"/>
                                <div>「椿の会」会長</div>
                                <p>シニアの力の集結</p>
                                <span>木村 茂</span><i>Shigeru Kimura</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img5} alt="kimura"/>
                                <div>政治家・実業家</div>
                                <p>田瓶市政の風雲児</p>
                                <span>大泉 薔薇彦</span><div/><i>Barahiko Ohizumi</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img6} alt="tanigawa"/>
                                <div>田瓶競馬場　調教師</div>
                                <p>動物と生きる</p>
                                <span>谷川 加奈子</span><i>Kanako Tanigawa</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img7} alt="iida"/>
                                <div>コメ農家</div>
                                <p>常に新たな発見を</p>
                                <span>飯田 かおり</span><i>Kaori Iida</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img8} alt="urakawa"/>
                                <div>毛総新聞　編集部</div>
                                <p>活字に命を吹き込む</p>
                                <span>浦川 麗子</span><i>Reiko Urakawa</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img9} alt="watabe"/>
                                <div>航空エンジニア</div>
                                <p>アイデアを形に</p>
                                <span>渡部 学</span><i>Manabu Watabe</i>
                            </SPeopleWrap>
                        </Grid>
                                                <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img10} alt="watabe"/>
                                <div>山野辺総合病院医師</div>
                                <p>対話から生まれる信頼</p>
                                <span>村田 桔平</span><i>Kippei Murata</i>
                            </SPeopleWrap>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img11} alt="watabe"/>
                                <div>小説家、評論家</div>
                                <p>今を切り取る文章</p>
                                <span>渡会 理砂</span><i>Risa Watarai</i>
                            </SPeopleWrap>
                        </Grid>
                                                <Grid item xs={12} sm={6} lg={4}>
                            <SPeopleWrap>
                                <img src={Img12} alt="watabe"/>
                                <div>データサイエンティスト</div>
                                <p>人工知能の活用</p>
                                <span>マイケル　岸田</span><i>Michael Kishida</i>
                            </SPeopleWrap>
                        </Grid>
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


export default People