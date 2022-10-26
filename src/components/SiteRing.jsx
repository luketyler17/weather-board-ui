import React from 'react'

const  AreaRing = ({item, site})=>{
    console.log('SR', item)
    const styles=[{
        location:'Cape Central',
        style:{
            position:'relative',
            bottom:'98%',
            left:'10%',
            width:'81.5%',
            height:'97%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Port',
        style:{
            position:'relative',
            bottom:'97%',
            left:'11%',
            width:'82%',
            height:'95%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-20/16/LZ',
        style:{
            position:'relative',
            bottom:'97%',
            left:'13%',
            width:'73.5%',
            height:'95%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-36/46',
        style:{
            position:'relative',
            bottom:'97%',
            left:'13%',
            width:'76%',
            height:'95%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-37/ASOC/PPF',
        style:{
            position:'relative',
            bottom:'97%',
            left:'9%',
            width:'77%',
            height:'95%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-40/41/SPOC',
        style:{
            position:'relative',
            bottom:'98%',
            left:'11.5%',
            width:'75%',
            height:'96%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'KSC Industrial',
        style:{
            position:'relative',
            bottom:'97%',
            left:'15.5%',
            width:'70.5%',
            height:'95%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'LC-39',
        style:{
            position:'relative',
            bottom:'92%',
            left:'19.5%',
            width:'67.2%',
            height:'86.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'SLF',
        style:{
            position:'relative',
            bottom:'98%',
            left:'15.9%',
            width:'69.8%',
            height:'97%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'CIDCO Park',
        style:{
            position:'relative',
            bottom:'94.7%',
            left:'12.6%',
            width:'72.5%',
            height:'89.7%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'Astrotech',
        style:{
            position:'relative',
            bottom:'95.8%',
            left:'10%',
            width:'75%',
            height:'90.8%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    }   
    
]
const styler=() =>{
   const siteStyle = styles.filter((item)=>item.location===site)
   return siteStyle[0].style
}
    return(
        <div style={styler()}></div>
    )
}

export default AreaRing