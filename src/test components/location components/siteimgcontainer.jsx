import React, {useContext} from 'react'
import { Card } from '@mui/material'
import MobileSiteRing from './mobilesitering'
import { AppContext } from '../../context/AppContext'

const SiteImgContainer= ({image})=>{

    const {lightning, site} = useContext(AppContext)

    return(
        <Card sx={{position:'relative', display:'flex'}}>
            <div style={{position:'relative'}}>
            <img src={image} style={{width:'350px', height:'300px'}}></img>
            <MobileSiteRing item={lightning.filter((i)=>i.location===site)} site={site}/>
            </div>
        </Card>
    )
}

export default SiteImgContainer