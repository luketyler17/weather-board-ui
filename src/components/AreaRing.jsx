import React from 'react'

const AreaRing =({location, item}) =>{
    const styles=[{
        location:'Cape Central',
        style:{
            position:'relative',
            bottom:'46.2%',
            left:'36.8%',
            width:'38%',
            height:'22.7%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Port',
        style:{
            position:'relative',
            bottom:'42.3%',
            left:'30%',
            width:'15%',
            height:'9.4%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-20/16/LZ',
        style:{
            position:'relative',
            bottom:'84.9%',
            left:'55.4%',
            width:'18.6%',
            height:'13.1%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-36/46',
        style:{
            position:'relative',
            bottom:'83.9%',
            left:'67.2%',
            width:'13%',
            height:'8.8%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-37/ASOC/PPF',
        style:{
            position:'relative',
            bottom:'120.9%',
            left:'38.9%',
            width:'20%',
            height:'13.7%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-40/41/SPOC',
        style:{
            position:'relative',
            bottom:'147%',
            left:'37.7%',
            width:'19.3%',
            height:'13%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'KSC Industrial',
        style:{
            position:'relative',
            bottom:'30%',
            left:'42%',
            width:'30%',
            height:'26%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'LC-39',
        style:{
            position:'relative',
            bottom:'99.5%',
            left:'52%',
            width:'26.5%',
            height:'30%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'SLF',
        style:{
            position:'relative',
            bottom:'136%',
            left:'26%',
            width:'27%',
            height:'30.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'CIDCO Park',
        style:{
            position:'relative',
            bottom:'27.3%',
            left:'56.2%',
            width:'15.7%',
            height:'13.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'Astrotech',
        style:{
            position:'relative',
            bottom:'93.8%',
            left:'32%',
            width:'15%',
            height:'9.3%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Patrick SFB',
        style:{
            position:'relative',
            bottom:'95.5%',
            left:'12%',
            width:'70%',
            height:'91.5%',
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

export default AreaRing