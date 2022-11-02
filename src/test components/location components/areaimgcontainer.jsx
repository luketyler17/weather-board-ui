import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext'
import { Card } from '@mui/material'
import AreaRingMobile from './AreaRingMobile'

const AreaImgContainer= ()=>{
 const {area, imagePath, lightning} = useContext(AppContext)

 return(
    <Card sx={{position:'relative', display:'flex', justifyContent:'center'}}>
        <div style={{position:'relative'}}>
        <img src={imagePath} style={{width:'350px', height:'300px'}}></img>
        {area.map((location)=>{
            return(
                <AreaRingMobile location={location} item={lightning.filter((item)=>item.location===location)} />
            )
        })}
        </div>    
    </Card>
 )
}

export default AreaImgContainer