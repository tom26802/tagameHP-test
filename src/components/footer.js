import React from 'react'
import styled from 'styled-components';
import {SAdiv, CWhite, CNavy} from './common/common.js'

const Footer = () => {
    return(
            <SFoot>
                <SAdiv>
                    <div>
                        <p style={{fontSize:'2rem'}}>田瓶市観光情報局</p>
                        <div style={{fontSize:'0.8rem'}}>© 2021 田瓶市観光協会</div>
                        <div style={{fontSize:'0.8rem'}}>TAGAME Tourism Association. All Rights Reserved.</div>
                    </div>
                </SAdiv>
            </SFoot>
        )

}

const SFoot = styled.div`
    with:100%;
    background-color:${CNavy};
    color:${CWhite};
    height:200px;
    position:relative;
    text-align:center;
`

export default Footer