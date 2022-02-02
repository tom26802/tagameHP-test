import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/watabe.jpg'
import {FadeContent} from '../common/motion.js'


const Watabe= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>渡部 学</SH2>
                    <span>わたべ・まなぶ</span>
                    <SP2>起業家</SP2>
                    <SP1>アイデアを形に</SP1>
                    <p>千葉生まれ。学生時代から会社を起業しITサービスを展開。IT大手に就職するも間もなくフリーランスへ転身。
                    その後は複数のベンチャー企業を立ちあげて運営している。座右の銘は「ピンチはチャンス」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>わたべです。ワタナベとよく言われますが、ワタベです。
            複数の会社を経営していていろんな事業を展開していますが、自分が何者かと言われれば「プログラマー」というのが
            一番しっくりくるかもしれません。「あったらいいな」と思うサービスを世に送り出す仕事をしています笑</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>たくさんあるので今特に力を入れている仕事を紹介しますね。
            新聞でも取り上げられたことがあるのですが、田瓶市では民間ロケット打ち上げプロジェクトが進行しています。
            僕の会社ではロケットに搭載予定の人工衛星のプログラム開発を受注しているんです。
            このプロジェクトは儲けよりも夢を追い求める企業が集まっていて、元締めのFORRICHさんもそうですが、
            非常に意欲的な人たちの中で仕事ができるのはかけがえのない経験です。</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>土地が安いことじゃないですかね笑。僕は田瓶に来る前は普通に港区に住んでいたのですが、
            プログラマーというのはリモートワークで全然仕事になっちゃうんで、東京の１ＤＫの値段で
            戸建てに住めちゃう田瓶に引っ越したんです。空気はきれいだし夜は静かだし、東京にいる
            仕事仲間からも羨ましがられてますよ</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>いまが精いっぱいすぎて将来のこととか考えられないですね笑。強いて言えば犬を飼いたいと思ってます。
            健康のために早朝に近所をジョギングしたりしてるんですが、すれ違う犬たちを見てると自分も欲しいなって。
            そんなこと言ってないですぐ買えって感じですよね笑</p>
        </FadeContent>
    )
}

export default Watabe

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