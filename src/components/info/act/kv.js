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
                    <p>少年の日の思い出に</p>
                    <p>少年に戻れる一瞬を</p>
                    <div>田瓶を遊びつくす</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <StaticImage src='../../../images/info/act/tour2-act.jpg' alt="top"　style={{width:'100%'}}/>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={3}>
                        <STopY>
                            <p>少年の日の思い出に</p>
                            <p>少年に戻れる一瞬を</p>
                            <div> 田瓶を遊びつくす</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
        </SSection>
        </FadeContent>
    )
}


export default Kv