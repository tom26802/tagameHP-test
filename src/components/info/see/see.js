import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {Grid } from '@material-ui/core'
import {FadeContent} from '../../common/motion.js'

import { SSpotWrap, SSpotTitle, SSpotContent} from '../../common/spot.js'

const See= () => {

    return (
        <SSpotWrap>
            <FadeContent>
                <SSpotTitle>駅周辺エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>毛総新聞社資料館</div>
                            <span>本町田瓶１丁目</span><br/>
                            <StaticImage src='../../../images/info/see/moso.jpg'/>
                            <p>田瓶駅前から徒歩3分。駅前商店街入り口にある毛総新聞社田瓶支社に併設。戦後の田瓶の発展の写真史や清田洞爺文学大賞の歴代受賞会に係る資料が閲覧できる。</p>
                        </SSpotContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>田瓶中央公園</div>
                            <span>本町免３丁目</span>
                            <StaticImage src='../../../images/info/see/area.jpg'/>
                            <p>田瓶市が運営する図書館、美術館、総合体育館が併設された文化エリア。充実した設備や企画展を求め、市民だけでなく県下から来訪者が絶えない。</p>
                        </SSpotContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>清田洞爺記念館</div>
                            <span>本町檀市東２丁目</span>
                            <StaticImage src='../../../images/info/see/kiyota.jpg'/>
                            <p>文豪、清田洞爺が生前暮らした自宅。現在は記念館として当時の様子が再現され、生原稿や清田の執筆道具などが展示されている。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>
            </FadeContent>
            <FadeContent>
                <SSpotTitle>レトロ街エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>若宮国際大学</div>
                            <span>本間町若宮１丁目中央</span>
                            <StaticImage src='../../../images/info/see/wakamiya.jpg'/>
                            <p>津田線東本間駅または金升駅からからバスで10分。休日は市民にも開放されておりスポーツ施設の借用も可能。ホールでの演劇、演奏会も多く催される。</p>
                        </SSpotContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>旧市街</div>
                            <span>本間町久木１～４丁目</span>
                            <StaticImage src='../../../images/info/see/retro.jpg'/>
                            <p>明治時代に発展した町工場をルーツとする煉瓦造りの建物が多く残存する。昔の建物をそのまま利用した久木商店街では工芸品やグルメが楽しめる。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>     
            </FadeContent>
            <FadeContent>
                <SSpotTitle>真殿山エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>真殿山神社</div>
                            <span>沼田町宍村西</span><br/>
                            <StaticImage src='../../../images/info/see/madono.jpg'/>
                            <p>真殿山中腹にある神社。室町時代に建築された。田瓶地域全体の氏神である真殿神を祭り、家内安全、商売繁盛、恋愛成就ほのか、登山の安全を司るとされる。</p>
                        </SSpotContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>荒神神社</div>
                            <span>沼田町島田１丁目</span>
                            <StaticImage src='../../../images/info/see/aragami.jpg'/>
                            <p>権現様を祭る神社。9月上旬に田瓶市の各地で行われる「まんだら灯籠祭り」は、荒神神社の境内に200以上設置されている灯籠に一斉灯火される圧巻のイベント。</p>
                        </SSpotContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>見才谷遺跡</div>
                            <span>沼田町宍村字倉谷</span>
                            <StaticImage src='../../../images/info/see/iseki.jpg'/>
                            <p>若宮国際大学によって発掘された貝塚や環状列石群。紀元前のものとされ、古来の田瓶市が海に面していたこと、また、当時の人々の生活スタイルなどが垣間見える。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>
            </FadeContent>
            <FadeContent>
                <SSpotTitle>赤川エリア</SSpotTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <SSpotContent>
                            <div>水と薬草の博物館</div>
                            <span>山野辺村満水６</span><br/>
                            <StaticImage src='../../../images/info/see/mizu.jpg'/>
                            <p>山野辺の歴史は「暴れ川」赤川、そして疫病との闘いでした。博物館では治水技術と山野辺総合病院監修による薬学の展示を学ぶことができます。</p>
                        </SSpotContent>
                    </Grid>
                </Grid>
            </FadeContent>
        </SSpotWrap>
    )
}


export default See