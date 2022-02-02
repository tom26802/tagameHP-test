import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/yago.jpg'
import {FadeContent} from '../common/motion.js'


const Yago= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>矢後 源五郎</SH2>
                    <span>やご・げんごろう</span>
                    <SP2>政治家　現田瓶市長</SP2>
                    <SP>田瓶の歴史の案内人</SP>
                    <p>田瓶市沼田町出身。市内小学校の教員を務める両親のもとに生まれる。若宮国際大学で真殿山研究に貢献し、地質学科を首席で卒業する。
                卒業後は電機メーカーに勤務し海外事業所も経験する。田瓶市に戻り市議を二期経験したのち、市長選に立候補し現職となる。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>田瓶市の市長を務めています。田瓶市に生まれ、大学まで田瓶で暮らしました。地元が好きで、ほとんど市から出たことがなかったと記憶しています笑。
            田瓶市は自然と産業が調和する豊な町です。皆さんが安心して暮らせる街を作るため日々努力しています。</p>
            <h3>仕事内容について詳しく教えてください</h3>
            <p>市長の仕事というと、市議会での活動を思い浮かべる方が多いかもしれません。実際は市職員との会議や田瓶市内の視察、有権者の皆さんの
            声を聞いたり、各種イベントに参加するなど、議会の外での仕事のほうが多いんです。昨日は金升トンネルの工事現場視察や、
            本間町の福祉介護施設のエッセンシャルワーカーの皆さんの実態をヒアリングを行いました。</p>
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>市長としてではなく私個人としての意見となりますが、田瓶市には独特の文化や今なお解明されていない史跡など、ミステリアスな
            側面があります。これらを解き明かすことが、北関東の、ひいては日本の歴史を紐解くことになると思うと、ワクワクしませんか？</p>
            <h3>将来の夢を教えてください</h3>
            <p>田瓶市の魅力をたくさんの人に知ってもらい、いろいろな人が訪れ、集まる場所にすることです。
            今はまだ地方の一都市ですが、いずれはすべての人が知らず知らずのうちについ田瓶の情景を思い浮かべる、そんな街にしたいと思っています。</p>
        </FadeContent>
    )
}

export default Yago

const SH2=styled.h2`
    margin-bottom:0;
`

const SP=styled.p`
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