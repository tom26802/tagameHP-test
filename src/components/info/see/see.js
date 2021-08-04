import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {Grid } from '@material-ui/core'
import {FadeContent} from '../../common/motion.js'

import { SSpotWrap, SSpotTitle, SSpotContent} from '../../common/spot.js'

const See= () => {

    return (
        <FadeContent>
            <SSpotWrap>
                <SSpotTitle>駅周辺エリア</SSpotTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <SSpotContent>
                                <div>毛総新聞社資料館</div>
                                <div>aaaa</div>
                                <p>田瓶駅前から徒歩3分。駅前商店街入り口にある毛総新聞社田瓶支社に併設。</p>
                            </SSpotContent>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SSpotContent>
                                aaaa
                            </SSpotContent>
                        </Grid>
                    </Grid>
                <SSpotTitle>レトロ街エリア</SSpotTitle>
                
                <SSpotTitle>真殿山エリア</SSpotTitle>
                
                <SSpotTitle>赤川エリア</SSpotTitle>
            </SSpotWrap>
        </FadeContent>
    )
}


export default See