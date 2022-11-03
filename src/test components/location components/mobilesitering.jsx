import React from 'react'

const MobileSiteRing = ({item}) => {
    const styles = [
        {
            location: 'LC-39',
            style: {
                width: '67%',
                height: '87%',
                bottom: '92%',
                left: '19.5%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Cape Central',
            style: {
                width: '82.1%',
                height: '96.7%',
                bottom: '98%',
                left: '9.7%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Port',
            style: {
                width: '82.1%',
                height: '95%',
                bottom: '97.3%',
                left: '10.5%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-20/16/LZ',
            style: {
                width: '74.4%',
                height: '95%',
                bottom: '97.7%',
                left: '12.6%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-36/46',
            style: {
                width: '75.3%',
                height: '95%',
                bottom: '97%',
                left: '13.6%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-37/ASOC/PPF',
            style: {
                width: '76.3%',
                height: '95%',
                bottom: '97%',
                left: '9.5%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CX-40/41/SPOC',
            style: {
                width: '74.7%',
                height: '96.4%',
                bottom: '97.9%',
                left: '11.9%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'KSC Industrial',
            style: {
                width: '70.5%',
                height: '95.5%',
                bottom: '97.5%',
                left: '15.5%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'SLF',
            style: {
                width: '69.8%',
                height: '97%',
                bottom: '98%',
                left: '15.4%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'CIDCO Park',
            style: {
                width: '74%',
                height: '89%',
                bottom: '94%',
                left: '11.8%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        },
        {
            location: 'Astrotech',
            style: {
                width: '75%',
                height: '90%',
                bottom: '95%',
                left: '10.5%',
                borderRadius: '50%',
                border:((item[0].type==='Clear')?'3px solid green':(item[0].category==='Watch')? '3px solid yellow':'3px solid red'),
                position: 'relative'
            }
        }
        
    ]

    const styler= ()=>{
        const currentStyle = styles.filter((entry)=>entry.location===item[0].location)
        return currentStyle[0].style
    }

    return (
        <div style={styler()}></div>
    )
}

export default MobileSiteRing
