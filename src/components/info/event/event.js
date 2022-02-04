import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {Grid } from '@material-ui/core'
import {FadeContent} from '../../common/motion.js'

import { SSpotWrap, SSpotTitle, SSpotContent} from '../../common/spot.js'

const Event= () => {

    return (
        <SSpotWrap>
            <FadeContent>
                <SSpotTitle>駅周辺エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>清田洞爺文学賞</div>
                            <span>本町田瓶１丁目</span><br/>
                            <StaticImage src='../../../images/info/event/kiyota.webp'/>
                            <p>清田洞爺ような世に語り継がれる文学の発掘を目的として創設され、毎年その年に発表された文学から毛総文芸振興会による選考と発表が行われる。</p>
                        </SSpotContent>
                    </Grid>
                   <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>停電の日</div>
                            <span>田瓶市全域</span><br/>
                            <StaticImage src='../../../images/info/event/teiden.webp'/>
                            <p>一年に一度、夜8時から翌3時までの間電力供給が停止する。戦後の電力不安による輪番停電を発端として始まった風習が、やがて山や川の神への感謝を込めてキャンドルを焚く祭りに昇華した。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>
            </FadeContent>
            <FadeContent>
                <SSpotTitle>レトロ街エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>佐藤杯</div>
                            <span>田瓶地方競馬場</span><br/>
                            <StaticImage src='../../../images/info/event/sato.webp'/>
                            <p>毎年春・秋に開催されるグランプリ。田瓶競馬場の中では最も歴史が古く、最大数の18馬出走となる迫力あふれるレース。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>
            </FadeContent>
            <FadeContent>
            <SSpotTitle>真殿山エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>まんだら灯籠祭り</div>
                            <span>沼田町島田</span><br/>
                            <StaticImage src='../../../images/info/event/tourou.webp'/>
                            <p>9月上旬、荒神神社の主祭神である権現様を祭る催事。荒神神社の参道を中心に設置してある、普段は利用されない200以上の灯籠に一斉に点火され、一帯を明るく燈し出す。</p>
                        </SSpotContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>地蔵祭</div>
                            <span>田瓶市各地</span>
                            <StaticImage src='../../../images/info/event/jizosai.webp'/>
                            <p>田瓶市ではお地蔵様を祭った寺社が各地にみられる。8月のお盆過ぎになると沼田山地蔵尊、身道代謝を中心として、各地で神輿や山車が街中に繰り出す通称地蔵祭が開催される。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>
            </FadeContent>
            <FadeContent>
            <SSpotTitle>赤川エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>千本菖蒲</div>
                            <span>山野辺村中矢</span><br/>
                            <StaticImage src='../../../images/info/event/ayame.webp'/>
                            <p>町全体があやめ色に染まる幻想的な祭り。銭湯や温泉では菖蒲風呂、各地ではラベンダーアイスクリームの販売など、菖蒲にちなんだサービスが提供される。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>
            </FadeContent>
        </SSpotWrap>
    )
}


export default Event