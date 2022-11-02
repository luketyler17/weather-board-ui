import React from 'react'

const AreaRingMobile= ({location, item})=>{
    
    const areaStyles = [
        {
            location: 'LC-39',
            style: {
                width: '27.8%',
                height: '30.4%',
                bottom: '100.2%',
                left: '52%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Cape Central',
            style: {
                width: '38.4%',
                height: '23.5%',
                bottom: '44%',
                left: '36.7%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Port',
            style: {
                width: '15.2%',
                height: '10%',
                bottom: '42.1%',
                left: '29.4%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-36/46',
            style: {
                width: '14.2%',
                height: '8.8%',
                bottom: '83%',
                left: '67.2%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-20/16/LZ',
            style: {
                width: '19%',
                height: '12.5%',
                bottom: '83.3%',
                left: '55.7%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-37/ASOC/PPF',
            style: {
                width: '21.7%',
                height: '13.2%',
                bottom: '118.1%',
                left: '38%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-40/41/SPOC',
            style: {
                width: '20%',
                height: '13%',
                bottom: '143.5%',
                left: '37.3%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'KSC Industrial',
            style: {
                width: '30%',
                height: '26.3%',
                bottom: '29%',
                left: '42%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'SLF',
            style: {
                width: '28%',
                height: '31%',
                bottom: '137.2%',
                left: '25%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CIDCO Park',
            style: {
                width: '15%',
                height: '13%',
                bottom: '26%',
                left: '57%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Astrotech',
            style: {
                width: '15%',
                height: '10%',
                bottom: '93%',
                left: '32%',
                borderRadius: '50%',
                //backgroundColor:'blue',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Patrick SFB',
            style: {
                width: '73%',
                height: '94%',
                bottom: '96%',
                left: '10.5%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        }
        
    ]
    
    const styler = ()=>{
        const newStyle = areaStyles.filter((i)=>i.location===location)
        return newStyle[0].style
    }

    return(
        <div style={styler()}></div>
    )
}

export default AreaRingMobile