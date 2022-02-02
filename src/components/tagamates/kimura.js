import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/kimura.jpg'
import {FadeContent} from '../common/motion.js'


const Kimura= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>木村 茂</SH2>
                    <span>きむら・しげる</span>
                    <SP2>「椿の会」代表</SP2>
                    <SP1>シニアの力の集結</SP1>
                    <p>田瓶市生まれ。大手金融機関に勤めあげた後、定年退職と共にUターン。地域の仲間と「椿の会」を立ち上げ地元田瓶のビジネスに貢献している。座右の銘は「酒は飲んでも飲まれるな」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>木村です。田瓶市のビジネスを助ける仕事をしています。格好よくいうとコンサルタント、実態は何でも屋ですね笑。
            きっかけは地域の忘年会でした。「木村さん、まだまだ働けるんじゃないかね」なんて周りから言われましてね。ちょうど
            退職後の余暇を持て余していることもあって、ではたくさんお金が稼げなくてもいいから、地元の商売に役立つことをしよう
            じゃないかと、仲間数名で株式会社「椿の会」を立ち上げたんです。
            </p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>私は銀行員時代は企業への融資を長く担当していて、企業の財務状況なんかを分析するのが得意でした。
            田瓶市には魅力的な商品を扱いながら、資金繰りや税務対応に四苦八苦している工場がたくさんあります。
            私はそんな方々の相談に乗ったりアドバイスをしてあげることによって微力ながらお手伝いしているんです。
            仲間には電気工事が得意なもの、プログラミングが得意な者などもおり、引退した世代が集まって
            次の世代を引っ張り上げていく。そういった仕組みを提供しています。
            </p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>食べ物がうまいことですかね。赤川の清流の恵みがあって新鮮な野菜やコメが手に入ります。
            あまり他所では有名ではないですがうまい地酒もそろっています。
            仕事上がりに仲間と行きつけの居酒屋で一杯やる。これ以上の楽しみはないですな</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>「椿の会」を１００名規模の組織にすることです。人生１００年時代とはよく言ったもので、
            ６０を過ぎたからと言って体と頭はまだまだ動きます。この仕事をしてみて、若い人たちも
            意外と「年の功」をありがたがってくれる人が多いことに気づきました。「まだ現役だぞ！」
            という方は７０代でも８０代でも構いませんから、是非私たちと一緒に地域に貢献しましょう</p>
        </FadeContent>
    )
}

export default Kimura

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