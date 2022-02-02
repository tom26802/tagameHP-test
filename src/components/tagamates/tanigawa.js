import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/tanigawa.jpg'
import {FadeContent} from '../common/motion.js'


const Tanigawa= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>谷川 加奈子</SH2>
                    <span>たにがわ・かなこ</span>
                    <SP2>田瓶競馬場　調教師</SP2>
                    <SP1>動物と共に生きる</SP1>
                    <p>北海道生まれ。高校卒業後、一時は地元企業に就職するも調教師を目指して競馬学校厩務員過程に入学。
                    卒業後は田瓶競馬場の厩務員となる。座右の銘は「Do My Best」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>調教師をしています。小さいころから動物が好きで、動物園や水族館で働くのが夢でした。
            高校卒業後は北海道の会社で事務をしていましたが、どうしても夢が諦めきれず
            調教師の道を目指すことにしました。現在はその夢がかなって田瓶地方競馬場の厩舎に住み込みで働いています。</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>馬の体調管理やトレーニングが主な仕事です。それ以外に馬房の清掃や食事の準備を毎日欠かさずこなしています。
            田瓶競馬場では併設する公園でポニーの乗馬体験や動物とのふれあいコーナーを開催しており、本業の合間を縫って
            田瓶競馬場を訪れる皆様を楽しませる企画を運営しています。</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>趣味でよく真殿山のハイキングに出かけます。野鳥や植物を観察しながらゆっくりと歩きます。田瓶市は都心からも
            2～3時間という立地にありながら豊かな自然が楽しめます。仕事に疲れたときにはふらっと立ち寄って、温泉にでも
            使ってその日のうちに帰る、といった楽しみができるところが魅力だと思います。</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>一流の調教師になることです。まだ歴も浅くベテランの先輩の姿を見ながら勉強の毎日です。馬はストレスを与えてしまうと
            体調を崩したり脱走してしまったりすることがあります。馬とも仲良くなり、騎手の方からも信頼されるような調教師になりたいです。</p>
        </FadeContent>
    )
}

export default Tanigawa

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