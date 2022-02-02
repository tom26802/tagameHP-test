import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/urakawa.jpg'
import {FadeContent} from '../common/motion.js'


const Urakawa= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>浦川 麗子</SH2>
                    <span>うらかわ・れいこ</span>
                    <SP2>毛総新聞　文化部</SP2>
                    <SP1>活字に命を吹き込む</SP1>
                    <p>山梨県生まれ。毛総新聞社に新卒で入社。千葉支店、甲府支店などを経験したのちに田瓶支店へ配属。
                    田瓶文化の取材やイベントの企画、文芸書の発行に携わる。座右の銘は「能ある鷹は爪を隠す」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>毛総新聞で社会部の記者をしております、浦川です。学生のころからメディアのお仕事に興味があり、
            新卒で毛総新聞千葉支店の社会部に配属になりました。災害や事故を取材する忙しい毎日でしたが、
            仕事を頑張りすぎたのとプライベートでも変化があったことで体調を崩してしまい一時休職しました。
            復職後は部署を異動になり現職に就いています。最初は埼玉の家から通勤していたのですが、
            通ううちに田瓶が気に入ってしまい、現在は本町に住んでいます。</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>肉体派が多い社会部と比べ、文化部は軟派と呼ばれることがあります。 私の部署では北関東の文化、書評などを扱っています。 
            特に私は農村部での食文化やアート作品を取材しています。特に田瓶の山野辺地区では 昔ながらの伝統的な料理や舞踊が残っており、
            取材するたびに新しい発見があります。
            </p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>実家のような安心感、でしょうか。全然具体的じゃないですね笑
            街そのものが、いつだれが来ても迎え入れてくれるような、そんな雰囲気を感じます。これは実際に訪れたことがある人じゃないと
            分からないと思います。私も転属が決まった当初は、聞いたことない街だな、どこだろう、なんて不安に思っていましたが、
            今では田瓶こそが自分の出身地じゃないかと思うくらいです。まだ住んで数年なのに、可笑しいですよね笑</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>いろんな世界を見てみたいと思います。田瓶支店への転属がなければこんなに素晴らしい街があるとは知らずに一生を終えて
            いたことでしょう。近い将来は海外にも挑戦したいと考えており、オンラインでの英会話の勉強を始めたところです。</p>
        </FadeContent>
    )
}

export default Urakawa

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