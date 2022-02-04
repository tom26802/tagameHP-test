import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core'

import Img1 from '../../images/index/people/hashimoto.jpg'
import {FadeContent} from '../common/motion.js'


const Etori= () => {

    return (
        <FadeContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <SH2>橋本 道夫</SH2>
                    <span>はしもと・みちお</span>
                    <SP2>村田興業交通　都市開発担当</SP2>
                    <SP1>安全/快適な街造り</SP1>
                    <p>北海道生まれ。大学卒業とともに村田興業交通に入社し田瓶市に移住。都市開発一筋で道路工事、
                    河川工事など大型プロジェクトのリーダーを歴任。趣味はマラソン、ロードバイク。座右の銘は「百聞は一見に如かず」</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SImg src={Img1}/>
                </Grid>
            </Grid>
            <h3>自己紹介をお願いします</h3>
            <p>北関東を中心に事業を展開する村田興業交通（株）で都市開発部の課長をしています。
            村田興業交通はその名の通りバスや鉄道などの交通事業から始まった会社ですが、現在は
            インフラ開発や教育、医療といった領域にも参画しています。私はその中で山野辺地方の
            道路工事や治水工事を担当する部署のリーダーとして勤務しています。</p>
            
            <h3>仕事内容について詳しく教えてください</h3>
            <p>田瓶市の山野辺地区は赤川の清涼な水資源を有し、動植物に恵まれた魅力的なエリアです。しかし
            古来から交通の便が悪く、また毎年赤川の洪水に悩まされていました。
            そこで村田興業交通では山野辺地区を重点開発エリアと位置づけ、道路、水道、電気といった
            インフラの整備はもちろん、学校や病院の充実を図り、より人間が住みやすい環境の開発を目指してきました。
            私は入社以来山野辺地区の開発事業に携わってきました。現場で重機を操り、地元の職人とともに
            老朽化した学校の再建を手掛けたこともあります。最近はプロジェクトリーダーとして、新規事業の企画や
            メンバーの統率が主な役割となっています。</p>
            
            <h3>あなたが思う田瓶の魅力を教えてください</h3>
            <p>宇宙人がいることですかね（笑）。冗談です。山野辺ではUFOや宇宙人の目撃情報が多いのはご存じでしょうか。
            ほとんどは獣や鳥の見間違いと言われています。それだけ自然が豊かだということです。田瓶市は文化と自然が共存する
            魅力的な街です。山野辺を含め田瓶市は日々発展、拡大していますので、ぜひ一度訪れてその素晴らしさを味わってほしいと思います。</p>
            
            <h3>将来の夢を教えてください</h3>
            <p>趣味のマラソンでホノルルマラソンに出場することです。ロードバイクが好きで、トライアスロンに参加するために
            市民プールで水泳も練習するようになりました。田瓶市には残念ながら海がないのですが、サイクリングに適した直線道路が
            多く整備されています。毎週末は息子と共に汗をかくのがこの上ない楽しみです。</p>
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