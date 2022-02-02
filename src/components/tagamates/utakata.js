import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/utakata.jpg'
import {FadeContent} from '../common/motion.js'


const Utakata= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>UTAKATA</SH2>
                    <span>うたかた</span>
                    <SP2>小説家・評論家</SP2>
                    <SP1>動画より鮮やかに</SP1>
                    <p>田瓶市在住の覆面作家。Webに投稿された処女作がインターネットでブームに。毛総新聞でコラムを担当するようになると
                    その名が世間に知れ渡ることとなった。一時は草苅亜嵐ではとも言われたが本人が公式に否定している。
                    座右の銘は「May the Force Be with You」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>UTAKATAです。本来このような場に出る人間ではないのですが、田瓶知名度向上のためということで少しだけ語ります。
            作家をしています。元はインターネット上に短編を投稿していましたが、幸い編集者さんの目にとまり、現在までに
            2作を電子書籍レーベルで出版させていただいています。覆面作家をしていますので素性はご勘弁ください。</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>私の場合は執筆時間よりもインプットの時間が多いように思います。本を読んだり、映画を見たり、インターネットサーフィンをしたり。
            情報を集めながら書き始める前におおよそのストーリーを頭の中で組み立てていきます。それをタイピングしていくのはただの作業ですね。
            一日で短編を一作書ききることもありますし、一か月以上アイデアが固まらないこともあります。それぞれですね。
        　　</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>私が小説家を目指したのは清田洞爺作品の影響でした。あの文体はまさに衝撃でした。
            怒り狂ったような、それでいて諦めのつかない足掻きのうちに救いを求めるような小説でした。
            田瓶市では文学賞も設置されて若手小説家の登竜門にもなっています。私のようにゆっくりと
            執筆活動に没頭したい人にとっては天国です。
            </p>
            
            <h3>将来の夢を教えてください</h3>
            <p>現在、連作シリーズの構想を作っています。また、詳しくは言えないのですがとあるアーティストに
            作詞の依頼もいただいています。今後は小説という媒体に限らず、芝居の脚本やゲームのシナリオなど様々な
            形態で物語を届けていければと考えています。
            </p>
        </FadeContent>
    )
}

export default Utakata

const SH2=styled.h2`
    margin-bottom:0;
`

const SP1=styled.p`
    margin-top:10px;
    margin-bottom:10px;
    font-size:120%;
    font-weight:bold;
`

const SP2=styled.p`
    margin-bottom:5px;
`

const SImg=styled.img`
    display: block;
    margin: auto;
    margin-top:15px;
    width:70%;
    
    @media (min-width: 600px) {
        width:80%;
  }
  
    @media (min-width: 960px) {
        width:100%;
  }
`