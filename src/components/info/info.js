import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import {Grid } from '@material-ui/core'
import {SSection, SCopy} from '../common/section.js'
import {FadeContent} from '../common/motion.js'
import {fontStyle, CBeige, CBrown} from '../common/variables.js'


const Info= () => {

    return (
        <FadeContent>
        <SSection white={true}>
        
            <h1>田瓶の見どころ</h1>
            <SCopy>
                江戸時代から続く匠の技<br />
                郊外のゆとりが育む感性<br />
                夢見る神の子が作る街
            </SCopy>

            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <FadeContent>
                        <SImageWrap>
                            <StaticImage src='../../images/info/tour-see.jpg'/>
                        </SImageWrap>
                        <STextWrap>
                            <SText>
                                <h4>見る・学ぶ</h4>
                                <p>　真殿山と赤川が織りなす大自然の恵み。神様・お地蔵様への信仰心が造り上げた建造物が最大の魅力です。北関東屈指のパワースポットと歴史ある寺社仏閣を巡り、田瓶の心を感じましょう。</p>
                                <Link to={'/info/see'}>
                                    <SLink>
                                        <button>詳しく見る　&gt;</button>
                                    </SLink>
                                </Link>
                            </SText>
                        </STextWrap>
                    </FadeContent>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <FadeContent>
                        <SImageWrap>
                            <StaticImage src='../../images/info/tour-act.jpg'/>
                        </SImageWrap>
                        <STextWrap>
                            <SText>
                            <h4>遊ぶ・体験する</h4>
                            <p>　田瓶市では大自然を生かした自然公園が各所に整備されています。友達、お子様、ペットと一緒に思いっきり体を動かしましょう。もちろん運動不足の解消やトレーニングにも最適。</p>
                            <Link to={'/info/act'}>
                                <SLink>
                                    <button>詳しく見る　&gt;</button>
                                </SLink>
                            </Link>
                        </SText>
                        </STextWrap>
                    </FadeContent>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <FadeContent>
                        <SImageWrap>
                            <StaticImage src='../../images/info/tour-food.jpg'/>
                        </SImageWrap>
                        <STextWrap>
                        <SText>
                            <h4>食べる・お土産</h4>
                            <p>　田瓶市では地元の野菜、山菜を取り入れた四季折々の料理を味わうことができます。焼き物「さんざん焼き」をはじめ、田瓶の名産品はどれも目移りするものばかりです。</p>
                                <Link to={'/info/goods'}>
                                    <SLink>
                                        <button>詳しく見る　&gt;</button>
                                    </SLink>
                                </Link>
                        </SText>
                        </STextWrap>
                    </FadeContent>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <FadeContent>
                        <SImageWrap>
                            <StaticImage src='../../images/info/tour-hotel.jpg'/>
                        </SImageWrap>
                        <STextWrap>
                        <SText>
                            <h4>泊まる・温泉</h4>
                            <p>　田瓶市は古くから隠れた温泉郷として知られています。ほかにも昔ながらの民宿やゲストハウス、公共の保養施設なども充実しており、おひとり様からサークル活動まで幅広いニーズに対応可能です。</p>
                                <Link to={'/info/hotel'}>
                                    <SLink>
                                        <button>詳しく見る　&gt; </button>
                                    </SLink>
                                </Link>
                        </SText>
                        </STextWrap>
                    </FadeContent>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <FadeContent>
                        <SImageWrap>
                            <StaticImage src='../../images/info/tour-event.jpg'/>
                        </SImageWrap>
                        <STextWrap>
                        <SText>
                            <h4>イベント</h4>
                            <p>　神社仏閣が多い田瓶市では夏になると市のあちこちでお祭りが催されます。写真展・文学賞など文化イベントも随時開催中。お越しの際はぜひイベントをチェックしてみてください。</p>
                                <Link to={'/info/event'}>
                                    <SLink>
                                        <button>詳しく見る　&gt;</button>
                                    </SLink>
                                </Link>
                        </SText>
                        </STextWrap>
                    </FadeContent>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <FadeContent>
                        <SImageWrap>
                            <StaticImage src='../../images/info/tour-tagamate.jpg'/>
                        </SImageWrap>
                        <STextWrap>
                        <SText>
                            <h4>人に会う</h4>
                            <p>　環境豊かな田瓶では、多種多様な才能が開花しています。今を、そして未来を担う田瓶人（通称、TAGAMATE）のストーリーを紹介します。</p>
                                <Link to={'/tagamate'}>
                                    <SLink>
                                        <button>詳しく見る　&gt;</button>
                                    </SLink>
                                </Link>
                        </SText>
                        </STextWrap>
                    </FadeContent>
                </Grid>
  
            </Grid>
        </SSection>
        </FadeContent>
    )
}


const SImageWrap=styled.div`
    
    margin:0 auto;
    
    @media(min-width:600px) {
        transform:translateY(20px);
        width:80%;
    }
`

const STextWrap=styled.div`
    background-color: ${CBeige};
    
    
    @media(min-width:600px) {
        margin-bottom:100px;
        padding-bottom:50px;
    }
`

const SText=styled.div`
    width:80%;
    margin:0 auto;
    height:300px;
    background-color:white;
    padding:5%;
    
    @media(min-width:600px) {
        transform:translateY(20px);
    }
    
    @media(max-width:600px) {
        transform:translateY(-50px);
        width:70%;
    }

    > h4 {
        margin:0 0 8px 0;
        ${fontStyle};
        color:${CBrown};
    }

    > p {
        margin:0 0 8px 0;   
    }

    }
`

const SLink =styled.div`
    
    text-align:right;
    
    > button {
    margin-top:8px;
    color:${CBrown};
    font-weight:bold;
    border: 1px solid ${CBrown};
    border-radius:20px;
    background-color:transparent;
    padding:6px 16px;
    position:relative;
    transition:0.3s;
    cursor: pointer;
    
    :hover{
        color:white;
        background-color:${CBrown};
    }

    }
`

export default Info