import React from 'react'
import { CardMedia } from '@mui/material'

const SiteImage = ({images}) =>{

    return (
        <img  style={{width: '100%', height: 'auto'}} src={images[0].imgsrc} alt='placeholder'></img>
    )
}
export default SiteImage