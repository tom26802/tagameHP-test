import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {Grid } from '@material-ui/core'
import {FadeContent} from '../../common/motion.js'

import { SSpotWrap, SSpotTitle, SSpotContent} from '../../common/spot.js'

const Goods= () => {

    return (
        <FadeContent>
            <SSpotWrap>
                <SSpotTitle>駅周辺エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>イル・ソーレ</div>
                                <span>本町田瓶２丁目</span><br/>
                                <StaticImage src='../../../images/info/goods/pizza.jpg'/>
                                <p>イタリア帰りのシェフ、大江慎太郎が手掛けるイタリアンレストラン。ピザ、パスタはもちろん、ダゴングループと提携し新鮮な海の幸を用いた料理が楽しめる。</p>
                            </SSpotContent>
                        </Grid>
                       <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>市役所前ビアガーデン</div>
                                <span>本町田瓶４丁目</span><br/>
                                <StaticImage src='../../../images/info/goods/beer.jpg'/>
                                <p>市役所前広場にて春から秋の間、平日は17時から入場可能。串焼きや揚げ物などB級グルメの出店が月替わりで出店する</p>
                            </SSpotContent>
                        </Grid>
                    </Grid>
                <SSpotTitle>レトロ街エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>道の駅たがめ</div>
                                <span>本間町金升３丁目</span>
                                <StaticImage src='../../../images/info/goods/michinoeki.jpg'/>
                                <p>朝どれ野菜や地元産の漬物などが販売されている。足湯やドッグランも整備されており、併設されている旧金升駅舎と共に人気のスポット。</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>とんび食堂</div>
                                <span>本間町金升２丁目</span>
                                <StaticImage src='../../../images/info/goods/teisyoku.jpg'/>
                                <p>地元の料理人、町内会で運営される食堂。彩り豊かで栄養価の高いレシピが売り。土日では早いと1時過ぎには売り切れになってしまうので注意。</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>お地蔵様グッズ</div>
                                <span>本間町各所</span>
                                <StaticImage src='../../../images/info/goods/jizo.jpg'/>
                                <p>田瓶市では街のあちこちにお地蔵さまが見られ、その数は数千基に及ぶと推定されている。田瓶市ではお地蔵をモチーフにしたぬいぐるみ、キーホルダーなどを販売中。</p>
                            </SSpotContent>
                        </Grid>
                    </Grid>                
                <SSpotTitle>真殿山エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>山菜ラーメン</div>
                                <span>沼田町全域</span><br/>
                                <StaticImage src='../../../images/info/goods/sansai.jpg'/>
                                <p>真殿山の山菜を使った醤油ベースのラーメン。発祥は本町のラーメン小坂とされるが、その後田瓶全域に広がり特に真殿様のお膝元である沼田町で多く食べられるようになった。</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <SSpotContent>
                                <div>草餅</div>
                                <span>沼田町青池</span>
                                <StaticImage src='../../../images/info/goods/kusamochi.jpg'/>
                                <p>沼田町では古来からヨモギが多く採取され、草餅を食べる文化があった。近年、町おこしの一環としてチョコレートを包んだ餅やオレンジピールを混ぜ込んだ生地が登場し名物になっている。</p>
                            </SSpotContent>
                        </Grid>
                    </Grid>
                <SSpotTitle>赤川エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>さんざん焼き</div>
                                <span>山野辺村中矢</span><br/>
                                <StaticImage src='../../../images/info/goods/sanzan.jpg'/>
                                <p>同地区で産出される粘土を活用した焼き物で、鎌倉時代にはすでに作られていたとされる。北関東では笠間焼、益子焼の影に隠れているが質素でありつつも割れにくい陶器として知られている。</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SSpotContent>
                                <div>コメ</div>
                                <span>山野辺村全域</span><br/>
                                <StaticImage src='../../../images/info/goods/ine.jpg'/>
                                <p>山野辺は赤川の水資源に恵まれ、コメの一大産地となっている。山野辺でしか買えない独自のブランド米「おかよたか」は芳醇な香りと粘り強い歯ごたえが特徴。</p>
                            </SSpotContent>
                        </Grid>
                    </Grid>
            </SSpotWrap>
        </FadeContent>
    )
}


export default Goods