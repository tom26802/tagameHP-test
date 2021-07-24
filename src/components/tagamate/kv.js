import React from "react"
import styled from 'styled-components';
import {Grid, Hidden } from '@material-ui/core';
import Img1 from '../../images/index/kv/top.jpg'
import {SSection } from '../common/section.js'
import {STopX, STopY } from '../common/kvmsg.js'

const Kv = () => {
    return (
        <SSection>
            <Hidden mdUp>
                <STopX>
                    <p>人と人とが触れ合うと</p>
                    <p>いつしか暖かい街になる</p>
                    <div>人通じて知る世界</div>
                </STopX>
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <img src={Img1} alt="top"　style={{width:'100%'}}/>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={3}>
                        <STopY>
                            <p>人と人とが触れ合うと</p>
                            <p>いつしか暖かい街になる</p>
                            <div> 人を通じて知る世界</div>
                        </STopY>
                    </Grid>
                </Hidden>
            </Grid>
        </SSection>
    )
}


export default Kv