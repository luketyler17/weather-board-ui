import React from 'react'

const SiteImage = ({images}) =>{

        
    
    
    
    console.log('IndPic', images)
    
    return (
        <img src={images[0].imgsrc} alt='placeholder'></img>
    )
}
export default SiteImage