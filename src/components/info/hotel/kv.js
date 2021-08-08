import React from "react"
import {Grid, Hidden } from '@material-ui/core';

import {SSection } from '../../common/section.js'
import {STopX, STopY } from '../../common/kvmsg.js'
import {FadeContent} from '../../common/motion.js'
import { StaticImage } from "gatsby-plugin-image"


const Kv = () => {
    return (
        <FadeContent>
        <SSection>
            <Hidden mdUp>
                <STopX>
                    <p>極上のもてなしで</p>
                    <p>心からの癒しと安らぎを</p>
                    <div>田瓶の名宿</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <StaticImage src='../../../images/info/hotel/tourt-hotel.jpg' alt="top"　style={{width:'100%'}}/>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={3}>
                        <STopY>
                            <p>極上のもてなしで</p>
                            <p>心からの癒しと安らぎを</p>
                            <div> 田瓶の名宿</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
        </SSection>
        </FadeContent>
    )
}


export default Kv