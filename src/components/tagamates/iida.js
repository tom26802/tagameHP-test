import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/iida.jpg'
import {FadeContent} from '../common/motion.js'


const Iida= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>飯田 かなえ</SH2>
                    <span>いいだ・かなえ</span>
                    <SP2>「おかよたか」生産者</SP2>
                    <SP1>常に新たな発見を</SP1>
                    <p>田瓶市生まれ。山野辺で代々農家を営む家に生まれる。伝統な農法を守る農家が多い中、
                    品種改良に積極的に取り組み若宮国際大学と共同で「おかよたか」の生産化を進めた。座右の銘は「一生懸命」。</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>山野辺で農家をしています。私の家の田んぼは代々水害や干ばつに見舞われてきました。
            私が小さいころ、市の皆さんが土地の整備を推進していただき、昔ほどは天災に見舞われなくなりました。
            それでもいつまた気候変動の影響を受けるか分かりません。そこで私はより強く、より美味しい
            コメを作ろうと、学者先生たちとも協力して品種開発を進めています。</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>やっていることは一般の農家さんとほぼ同じです。朝８時ころから田んぼ作業を始めます。
            夕方ころから稲の天日干しや出荷の準備を進めていきます。暑い昼の時間はお昼寝をしたり、
            梅ジュースを作って休憩していたりすることも多いですね。なんせ体力勝負なので。
            仕事はすべて私と夫、両親で行っています。
            </p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>のんびり過ごせるとこだと思います。山も川も近くにありますから、子供たちをのびのびと育てることが
            できます。獣が出ることはあっても、ぶっそうな事件が起きることもあまりありませんし。
            大きな病院や学校も整備されていて、ここでの時間が子供たちにとって貴重な体験になると期待しています。
            </p>
            
            <h3>将来の夢を教えてください</h3>
            <p>いま、田瓶産の米を使ったレシピの開発に力を入れています。
            もちもちとした食感が特徴の「おかよたか」は炊き込みご飯やチキンライスとも相性が抜群です。
            また米粉パンの試作にも挑戦しています。田瓶発のおいしさをぜひ皆さんに知ってもらい、
            もっともっとたくさんの人に食べてもらいたいと思っています。</p>
        </FadeContent>
    )
}

export default Iida

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