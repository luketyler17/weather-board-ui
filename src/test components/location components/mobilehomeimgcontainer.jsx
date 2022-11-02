import React, {useContext} from 'react'
import { Card } from '@mui/material'
import MobileHomeRing from './mobilehomering'
import { AppContext } from '../../context/AppContext'


const MobileHomeImgContainer= ()=>{
    const {lightning} = useContext(AppContext)
    const locations =['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC', 'KSC Industrial', 'LC-39', 'SLF', 'CIDCO Park', 'Astrotech', 'Patrick SFB']
    return(
        <Card sx={{position:'relative', display:'flex', justifyContent:'center'}}>
            <div style={{position:'relative'}}>
                <img style={{width:'350px', height:'300px', paddingRight:'4%'}} src={'./images/wholemap.gif'}></img>
                {locations.map((item)=>{
                    return(
                        <MobileHomeRing item={lightning.filter((i)=>i.location === item)} location={item} />
                    )
                })}
            </div>
        </Card>
    )
}

export default MobileHomeImgContainer