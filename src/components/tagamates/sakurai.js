import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/sakurai.jpg'
import {FadeContent} from '../common/motion.js'


const Sakurai= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>ジェフ サクライ</SH2>
                    <SP2>フォーリッチ事業統括</SP2>
                    <SP1>人工知能の活用</SP1>
                    <p>カナダ出身。若くしてトロントIT企業の役員を務めていたがヘッドハンティングによりフォーリッチに参加。
                    東京本社を経て田瓶開発センターに配属される。
                    現在は先端技術事業統括として百名規模の開発チームを率いるリーダー。座右の銘は「急がば回れ」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>ジェフです。もとはカナダのITベンチャーでAIの開発をしていましたが、縁あってフォーリッチにジョインすることになりました。
            大学では情報工学を専攻しており、現在は事業統括という立場ですが私自身いまでも開発に携わっています。
            プライベートでは動物が好きで、犬を4匹と猫を2匹、文鳥とインコを飼っています。休日はこの子達の世話をして過ごします。
            </p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>フォーリッチは様々な工業製品を扱う企業です。日本企業が得意とする精密機械製造の分野で長く業界をリードしてきました。
            近年はAIの発展により単に精巧な機会という以上に、「賢く管理しやすい」ことが求められるようにしました。
            私のチームでは工業製品のセンサーからデータをリアルタイムに収集し、故障の予兆をAIによって事前に検知する
            アルゴリズムを開発しています。</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>温泉が好きです。月に１回は真殿山にある温泉宿に家族と泊まって疲れを癒しています。
            小さな温泉街ですが、その分人も多くなくゆっくりとした時間を過ごすことができます。
            道のわきの小川で沢蟹をとったり、原っぱで夜に星を見上げたりと少年時代のような時間を過ごすのが好きです。</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>田瓶の開発センターを大きくしたいと思っています。今も従業員1000人を超える重要拠点ですが、
            人工衛星プロジェクトのために一時的に増員したメンバーが含まれています。AI開発は今後10年にわたる
            産業界の注目技術になるでしょう。日本発、田瓶発の技術開発を世に知らしめていきたいですね。</p>
        </FadeContent>
    )
}

export default Sakurai

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