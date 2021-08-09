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
                    <p>神を祭る聖なる祭事</p>
                    <p>心躍るイベントの数々</p>
                    <div>田瓶を心に焼き付ける</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <StaticImage src='../../../images/info/event/tourt-event.webp' alt="top"　style={{width:'100%'}}/>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={3}>
                        <STopY>
                            <p>神を祭る聖なる祭事</p>
                            <p>心躍るイベントの数々</p>
                            <div> 田瓶を心に焼き付ける</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
        </SSection>
        </FadeContent>
    )
}


export default Kv