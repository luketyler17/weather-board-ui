import React from 'react'

const MobileHomeRing= ({item, location})=>{

    const styles = [
        {
            location: 'LC-39',
            style: {
                width: '14.2%',
                height: '10.2%',
                bottom: '115.75%',
                left: '48%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Cape Central',
            style: {
                width: '14.5%',
                height: '10%',
                bottom: '46.5%',
                left: '62%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Port',
            style: {
                width: '7%',
                height: '5%',
                bottom: '45.5%',
                left: '59%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-36/46',
            style: {
                width: '6.2%',
                height: '5%',
                bottom: '65%',
                left: '73.2%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-20/16/LZ',
            style: {
                width: '8.5%',
                height: '6%',
                bottom: '64.3%',
                left: '68.5%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-37/ASOC/PPF',
            style: {
                width: '8%',
                height: '6%',
                bottom: '80.8%',
                left: '62%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-40/41/SPOC',
            style: {
                width: '8%',
                height: '6.1%',
                bottom: '92.5%',
                left: '61%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'KSC Industrial',
            style: {
                width: '14.5%',
                height: '10%',
                bottom: '92.5%',
                left: '44.5%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'SLF',
            style: {
                width: '14.5%',
                height: '10%',
                bottom: '128%',
                left: '34.7%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CIDCO Park',
            style: {
                width: '7%',
                height: '5%',
                bottom: '103.2%',
                left: '23%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Astrotech',
            style: {
                width: '7%',
                height: '5%',
                bottom: '125.3%',
                left: '13.6%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Patrick SFB',
            style: {
                width: '6.8%',
                height: '4.5%',
                bottom: '85.8%',
                left: '58%',
                borderRadius: '50%',
                
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        }
        
    ]
    
    const styler = ()=>{
        const newStyle = styles.filter((i)=>i.location===location)
        return newStyle[0].style
    }
    return(
        <div style={styler()}></div>
    )
}

export default MobileHomeRing