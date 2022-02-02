import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/murata.jpg'
import {FadeContent} from '../common/motion.js'


const Murata= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>村田 桔平</SH2>
                    <span>むらた・きっぺい</span>
                    <SP2>山野辺総合病院医師</SP2>
                    <SP1>対話から信頼を</SP1>
                    <p>村田興業創業家、５代目社長村田功の三男として生まれる。現在は山野辺総合病院精神科医師。
                    また山野辺総合病院職員寮長も務める。座右の銘は「失敗は成功のもと」</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>村田です。精神科医をしています。田瓶市で生まれて大学卒業までずっと田瓶市に住んでいました。
            東京の大学に、田瓶から毎日通っていたんですよ笑。都内の病院に勤務するようになってからはそうも言っていられず
            都内に住んだり、語学研修もかねて海外の病院で勤務したりしていました。一通り医師としての経験を積ませてもらったかな、
            というタイミングで父が院長を務める山野辺総合病院に勤めることになりました。
            </p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>山野辺総合病院はその名のとおり内科・外科・放射線科などを備える
            中核病院ですが、開業当初は精神科医を専門とする国内有数の病院でした。私は臨床医としての立場のほかに、
            副部長として病院の運営や医師の人材育成、設備投資の決定などの業務を行っています。</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>田瓶市に来るとお地蔵さまが街のあちこちにあるのが分かると思います。その数は市内には一万基あるとも言われています。
            田瓶市の人達は本当にお地蔵を信じていて、お供え物をしたりお祈りをしたりというのは日常に行われています。
            「かさじぞう」の昔話にもありますが、助け合いや気遣いの気持ちが街の人々に浸透しています。
            日本で一番、優しい人たちが住む街なんだと思っています。</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>父の定年退職までに院長を継げるよう、医師としての技術を磨いていきたいです。医師は単に知識があるとか
            臨床経験が多いだけでなく、患者や病院のスタッフたちに信頼されるものでなければなりません。
            そのためにも関係者と真摯に向き合って、ひとつひとつ経験を重ねていきたいと思っています。</p>
        </FadeContent>
    )
}

export default Murata

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