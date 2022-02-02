import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/etori.jpg'
import {FadeContent} from '../common/motion.js'


const Etori= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>餌取 京子</SH2>
                    <span>えとり・きょうこ</span>
                    <SP2>沼田ホテル　4代目女将</SP2>
                    <SP1>田瓶御三家の系譜</SP1>
                    <p>田瓶市生まれ。沼田町にある旅館の女将。青池温泉温郷の事業者理事や田瓶市観光協会の顧問も務める。趣味はピアノと海外旅行。座右の銘は「一期一会」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>餌取京子と申します。沼田ホテルの女将を任されています。私は沼田ホテルの創業家に生まれました。
            最初は敷かれたレールの上を歩むのが嫌で、高校卒業後に実家を飛び出して外資系ホテルで働きました。
            先代の女将が体調を崩したことで実家に予備戻され、せっかく私が継ぐのであればとこれまでのやり方を
            一つ一つ見直していくことをライフワークにしています。</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>旅館の女将というと優雅な姿を想像するかもしれませんが、実態は全く異なります。
            台所にも立つし館内のお掃除もします。あとは帳簿を付けたりお客様を出迎えたりと忙しい毎日です。
            沼田ホテルは江戸時代にルーツを持ち、現在の業態になったのは戦前です。伝統という名のもとに
            旧態依然のシステムが残っていて、このままではお客様に飽きられてしまうのでは、という危機感がありました。
            なのでこれまでの成功体験にすがらず、新しいお食事メニューの開発や、お部屋の改装、事務処理の電子化などに取り組んでいます。</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>手前味噌になりますが、真殿の山の美しさ、育まれる伝統は、日本の他有名の観光地にも引けを取らない魅力があると思っています。
            夏は避暑地として、冬は心身温まる温泉地として四季折々の姿で出迎える沼田の魅力を、一度ならず感じていただきたいです。</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>お客様に喜んでいただける沼田ホテルを築いていくことです。私には2人の息子と1人の娘がおり、親としてはいずれ沼田ホテルを
            継いで欲しいという気持ちがあるものの、かつて私がそうしたように、外の世界を存分に見てから判断してほしいと思っています。
            世界が変わっていく以上、ホテルも変わらなければなりません。その時代その時代、お客様が求めているものを感じ取り、
            最高のおもてなしを提供できたらと願ってやみません。</p>
        </FadeContent>
    )
}

export default Etori

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