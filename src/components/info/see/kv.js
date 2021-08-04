import React from "react"
import {Grid, Hidden } from '@material-ui/core';

import {SSection } from '../../common/section.js'
import {STopX, STopY } from '../../common/kvmsg.js'
import {FadeContent} from '../../common/motion.js'

import Img1 from '../../../images/info/see/tour-see2.jpg'


const Kv = () => {
    return (
        <FadeContent>
        <SSection>
            <Hidden mdUp>
                <STopX>
                    <p>積み重なる歴史</p>
                    <p>過去に学び、未来に生かす</p>
                    <div>田瓶を見る、学ぶ</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <img src={Img1} alt="top"　style={{width:'100%'}}/>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={3}>
                        <STopY>
                            <p>積み重なる歴史</p>
                            <p>過去に学び、未来に生かす</p>
                            <div> 田瓶を見る、学ぶ</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
        </SSection>
        </FadeContent>
    )
}


export default Kv