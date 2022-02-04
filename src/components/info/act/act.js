import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {Grid } from '@material-ui/core'
import {FadeContent} from '../../common/motion.js'

import { SSpotWrap, SSpotTitle, SSpotContent} from '../../common/spot.js'

const Act= () => {

    return (
        <SSpotWrap>
          <FadeContent>
            <SSpotTitle>駅周辺エリア</SSpotTitle>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>田瓶城址公園</div>
                        <span>本町小山坂上</span><br/>
                        <StaticImage src='../../../images/info/act/park.jpg'/>
                        <p>江戸時代の城壁の名残りがみられる広場。内堀跡と石畳の広場では毎月フリーマーケットが開催中。</p>
                    </SSpotContent>
                </Grid>
               <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>アイデアベース</div>
                        <span>本町田瓶３丁目</span><br/>
                        <StaticImage src='../../../images/info/act/forrich.jpg'/>
                        <p>田瓶市に開発拠点を持つ企業群が提供するオープンラボ。科学展や実験教室、講演会などが催される。</p>
                    </SSpotContent>
                </Grid>
            </Grid>
        </FadeContent>
        <FadeContent>
            <SSpotTitle>レトロ街エリア</SSpotTitle>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>旧金升駅</div>
                        <span>本間町金升３丁目</span>
                        <StaticImage src='../../../images/info/act/eki.jpg'/>
                        <p>道の駅田瓶に付属の建物。津田線敷設当初の駅舎が当時の姿のまま保存され、鉄道資料室やレンタル画廊として活用されている。</p>
                    </SSpotContent>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>田瓶地方競馬場</div>
                        <span>本間町小坪根４丁目</span>
                        <StaticImage src='../../../images/info/act/keiba.jpg'/>
                        <p>東本間駅より送迎バス。競馬場に併設された牧場では乗馬体験やレンタルサイクリングが営業しており、幅広い年齢層に楽しんでいただくことができる</p>
                    </SSpotContent>
                </Grid>
                </Grid>                
        </FadeContent>
        <FadeContent>
            <SSpotTitle>真殿山エリア</SSpotTitle>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>上南湖</div>
                        <span>沼田町宍村字下谷</span><br/>
                        <StaticImage src='../../../images/info/act/jonan.jpg'/>
                        <p>真殿山の麓にある湖。塩分濃度が高く、海につながるという伝承がある。夏場にはスワンボードやSUPなどがレンタルできる。</p>
                    </SSpotContent>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>真殿山ハイキング</div>
                        <span>沼田町蛙井</span>
                        <StaticImage src='../../../images/info/act/yama.jpg'/>
                        <p>麓の登山口から真殿山神社を目指す、初心者にも易しい登山道。霊石、奇石、名木を拝むことができる。真殿山神社以降は危険度が急増するため、初心者は神社をゴールとすることを推奨。。</p>
                    </SSpotContent>
                </Grid>
            </Grid>
        </FadeContent>
        <FadeContent>
            <SSpotTitle>赤川エリア</SSpotTitle>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>赤川グリーンパーク</div>
                        <span>山野辺村満水３</span><br/>
                        <StaticImage src='../../../images/info/act/akagawa.jpg'/>
                        <p>地域最大級の自然公園。夏は園内にニジマス釣り生け簀、冬はスケートリンクとして楽しめる。キャンプ場が併設され、夏季には天体観測教室が催される。</p>
                    </SSpotContent>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>あやめが丘公園</div>
                        <span>山野辺村中矢</span><br/>
                        <StaticImage src='../../../images/info/act/ayame.jpg'/>
                        <p>80種類7000株あやめが群生。他にも五色チューリップ広場、桜のアーチロード、紅葉の丘など一年を通じて楽しめる。</p>
                    </SSpotContent>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SSpotContent>
                        <div>たがめ動物王国</div>
                        <span>山野辺村洞道</span><br/>
                        <StaticImage src='../../../images/info/act/dobutsu.jpg'/>
                        <p>農家・酪農家らが運営する観光牧場。馬・牛・羊のほか、数は少ないもののカピパラ、カンガルー、ハシビロコウなどの希少な動物も飼育している。。</p>
                    </SSpotContent>
                </Grid>
            </Grid>
        </FadeContent>
    </SSpotWrap>

    )
}


export default Act