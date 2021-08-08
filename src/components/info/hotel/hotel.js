import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {Grid } from '@material-ui/core'
import {FadeContent} from '../../common/motion.js'

import { SSpotWrap, SSpotTitle, SSpotContent} from '../../common/spot.js'

const Hotel= () => {

    return (
        <FadeContent>
            <SSpotWrap>
                <SSpotTitle>駅周辺エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>ロイヤリティ田瓶</div>
                                <span>本町田瓶１丁目</span><br/>
                                <StaticImage src='../../../images/info/hotel/royal.jpg'/>
                                <p>駅ビルから遊歩道直結で徒歩2分という好立地。宴会場やレストランも完備。特別な一日におすすめのラグジュアリホテル。</p>
                            </SSpotContent>
                        </Grid>
                       <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>リバーサイド田瓶</div>
                                <span>本町揖斐川１丁目</span><br/>
                                <StaticImage src='../../../images/info/hotel/bus.jpg'/>
                                <p>駅前商店街を抜けた先にあるリーズナブルなビジネスホテル。毎日焼き上がる自家製クロワッサンはファンも多い</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>胎内睡眠施設ハイドラ</div>
                                <span>本町田瓶４丁目</span><br/>
                                <StaticImage src='../../../images/info/hotel/hydra.jpg'/>
                                <p>宿泊者は手足を抱えた状態で袋状の布に包まれホワイトノイズを聞きながら眠りにつくことができる。「不思議な夢を見た」という体験もしばしば。</p>
                            </SSpotContent>
                        </Grid>
                    </Grid>
                <SSpotTitle>真殿山エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>沼田ホテル</div>
                                <span>沼田町蛙井</span><br/>
                                <StaticImage src='../../../images/info/hotel/numata.jpg'/>
                                <p>田瓶駅から沼田循環バスに乗り３０分。創業100年の伝統的な旅館。温泉に入った後は板長が腕を振るうディナーに舌鼓。</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <SSpotContent>
                                <div>青池温泉郷</div>
                                <span>沼田町青池</span>
                                <StaticImage src='../../../images/info/hotel/aoike.jpg'/>
                                <p>沼田町は室町時代から湯治の街として知られていた。既述の沼田ホテルをはじめ、公衆浴場および6つの温泉宿が真殿山の源泉を利用したスパを提供している。</p>
                            </SSpotContent>
                        </Grid>
                    </Grid>
                <SSpotTitle>赤川エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>民宿谷田部</div>
                                <span>山野辺村中矢</span><br/>
                                <StaticImage src='../../../images/info/hotel/yatabe.jpg'/>
                                <p>古民家を丁寧にリフォームして提供されている宿。今はほとんど使われていないが、裏手には神楽舞台があるなど昔ながらの田瓶の姿を体験することができる。</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>赤川キャンプ場</div>
                                <span>山野辺村満水</span><br/>
                                <StaticImage src='../../../images/info/hotel/camp.jpg'/>
                                <p>赤川グリーンパークに併設されているキャンプ場。レンタルテントや全6棟のコテージも用意されており、手ぶらでもアウトドアを楽しむことができる。</p>
                            </SSpotContent>
                        </Grid>
                    </Grid>
            </SSpotWrap>
        </FadeContent>
    )
}


export default Hotel