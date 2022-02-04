import React from "react"
import {Grid, Hidden } from '@material-ui/core';

import {SSection } from '../common/section.js'
import {STopX, STopY } from '../common/kvmsg.js'
import {FadeContent} from '../common/motion.js'

import Img1 from '../../images/info/info.jpg'


const Kv = () => {
    return (
        <FadeContent>
        <SSection>
            <Hidden mdUp>
                <STopX>
                    <p>ふらっと立ち寄る一人旅</p>
                    <p>大切な人と訪れる二人旅</p>
                    <p>家族と、仲間と、思い出作り</p>
                    <div>神様に会いに行こう</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <img src={Img1} alt="top"　style={{width:'100%'}}/>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={3}>
                        <STopY>
                            <p>ふらっと立ち寄る一人旅み</p>
                            <p>大切な人と訪れる二人旅</p>
                            <p>家族と、仲間と、思い出作り</p>
                            <div> 神様のすむまち、田瓶</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
        </SSection>
        </FadeContent>
    )
}


export default Kv