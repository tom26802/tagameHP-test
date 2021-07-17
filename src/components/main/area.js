import React from "react"
import styled from 'styled-components';
import {Grid } from '@material-ui/core';
import {SSection, SSectionTitle, SSectionDiscription, SCredit} from '../common/common.js'
import Img1 from '../../images/index/area/map.png'

const Area = () => {
    return (
        <SSection>
            <SSectionTitle>田瓶の地を知る</SSectionTitle>
            <Grid container>
                <Grid item xs={10}>
                    <SSectionDiscription>
                        山梨と群馬の県境に位置する田瓶<br />
                        駅前の繁華街を抜ければ大自然が広がるエリアに直結する<br />
                        大正時代から残るレトロな街並みもコアな魅力のひとつ
                    </SSectionDiscription>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <img src={Img1} alt="top"　style={{width:'90%', margin:'5%'}}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div style={{margin:'10%'}}>
                               <div>
                                  <SAreaTitle right>
                                      <span>駅周辺エリア</span>
                                      <SUnderline right Bcolor='rgb(82, 0, 106, 0.4)'/>
                                    </SAreaTitle>
                                    <SAreaText>　JR田瓶駅を中心とする最も活気あふれるエリア。オフィスビルや商店が立ち並び、大型ショッピングモールやイベントホールも整備されています。</SAreaText>
                                </div>
                                <div>
                                    <SAreaTitle>
                                        <span>レトロ街エリア</span>
                                        <SUnderline Bcolor='rgb(255, 169, 0, 0.4)'/>
                                    </SAreaTitle>
                                    <SAreaText>　明治以降の町工場が連なり、レンガ造りのビルや古民家カフェ、料亭の街並みが味わい深いエリア。私立若宮国際大学の広大なキャンパスは誰でも見学可能です。</SAreaText>
                                </div>
                                <div>
                                    <SAreaTitle right>
                                        <span>真殿山エリア</span>
                                        <SUnderline right Bcolor='rgb(255, 118, 0, 0.4)'/>
                                    </SAreaTitle>
                                    <SAreaText>　標高1,400メートルの真殿山はハイキングコースが整備され、中腹の真殿山神社や青池温泉郷は、古くから湯治や避暑地として人気を誇っています。</SAreaText>
                                </div>
                                <div>
                                    <SAreaTitle>
                                        <span>赤川エリア</span>
                                        <SUnderline Bcolor='rgb(205, 17, 59, 0.4)'/>
                                    </SAreaTitle>
                                    <SAreaText>赤川の大自然が肌で体感できるエリア。自然公園や動物園が有名で、ドライブにも最適な足引スカイラインは甲府方面からの玄関口となっています。</SAreaText>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <SCredit>
                        <ul>
                            <li>　</li>
                            <li><span>Dream​Quest of Unknown TAGAME</span></li>
                            <li><p>特色豊かな田瓶の地理</p></li>
                        </ul>
                    </SCredit>
                </Grid>
            </Grid>

        </SSection>
    )
}

const SAreaTitle = styled.div`
    font-size:1.2rem;
    font-weight:bold;
    margin-top:20px;
    text-align: ${props=>props.right ? "right" : "left"};
    position:relative;
`

const SUnderline =styled.div`
    height:12px;
    background-color:${props=>props.Bcolor};
    width:140px;
    position:absolute;
    ${props=>props.right ? "right" : "left"}:0;
    bottom:0;
`

const SAreaText =styled.div`
    padding-top:4px;
    font-size:0.9rem;
`

export default Area