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
                    <p>大地の恵み</p>
                    <p>あふれる創作意欲</p>
                    <div>田瓶を味わい尽くす</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <StaticImage src='../../../images/info/goods/tour-good.jpg' alt="top"　style={{width:'100%'}}/>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={3}>
                        <STopY>
                            <p>大地の恵み</p>
                            <p>あふれる創作意欲</p>
                            <div> 田瓶を味わい尽くす</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
        </SSection>
        </FadeContent>
    )
}


export default Kv