import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/oizumi.jpg'
import {FadeContent} from '../common/motion.js'


const Ohizumi= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>大泉 薔薇彦</SH2>
                    <span>おおいずみ・ばらひこ</span>
                    <SP2>政治家　改革家</SP2>
                    <SP1>田瓶市政の風雲児</SP1>
                    <p>東京生まれ。高校より田瓶在住。本名は大泉一郎。田瓶市議の秘書を務めたのち独立。
                    かつての師の対立候補として名乗りを上げ当選を勝ち得た。特定の派閥に属さず、大胆な物言いが特徴</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>XXX</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>XXX</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>XXX。</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>XXX。</p>
        </FadeContent>
    )
}

export default Ohizumi

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