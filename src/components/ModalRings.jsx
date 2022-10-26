import React from 'react'

const ModalRings =({location, item}) =>{
    console.log('MR', item)
    const styles=[{
        location:'Cape Central',
        style:{
            position:'relative',
            bottom:'51%',
            left:'64.7%',
            width:'15%',
            height:'10.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Port',
        style:{
            position:'relative',
            bottom:'49%',
            left:'62%',
            width:'6.3%',
            height:'4.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-20/16/LZ',
        style:{
            position:'relative',
            bottom:'69%',
            left:'71.5%',
            width:'8.4%',
            height:'6%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-36/46',
        style:{
            position:'relative',
            bottom:'68.5%',
            left:'76%',
            width:'6.5%',
            height:'4.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-37/ASOC/PPF',
        style:{
            position:'relative',
            bottom:'85.8%',
            left:'64.9%',
            width:'8.2%',
            height:'6.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-40/41/SPOC',
        style:{
            position:'relative',
            bottom:'98%',
            left:'63.8%',
            width:'8.2%',
            height:'6.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'KSC Industrial',
        style:{
            position:'relative',
            bottom:'97.9%',
            left:'46.6%',
            width:'14.9%',
            height:'10.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'LC-39',
        style:{
            position:'relative',
            bottom:'123%',
            left:'50%',
            width:'14.9%',
            height:'10.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'SLF',
        style:{
            position:'relative',
            bottom:'135.1%',
            left:'36.1%',
            width:'14.9%',
            height:'10.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'CIDCO Park',
        style:{
            position:'relative',
            bottom:'107.6%',
            left:'24.7%',
            width:'6.5%',
            height:'4.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'Astrotech',
        style:{
            position:'relative',
            bottom:'131.3%',
            left:'14.6%',
            width:'6.5%',
            height:'4.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Patrick SFB',
        style:{
            position:'relative',
            bottom:'86.8%',
            left:'60.8%',
            width:'6.5%',
            height:'4.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    }      
    
]
const styler=() =>{
    const AreaStyle = styles.filter((item)=>item.location===location)
    return AreaStyle[0].style
 }
    
    return(
        <div style={styler()}></div>
    )
}

export default ModalRings