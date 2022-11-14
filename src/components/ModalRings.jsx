import { borderColor } from '@mui/system'
import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const ModalRings =({location, item}) =>{
    const {mode} = useContext(AppContext)
    const styles=[{
        location:'Cape Central',
        style:{
            position:'relative',
            bottom:'50%',
            left:'64.7%',
            width:'14.8%',
            height:'10.3%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Port',
        style:{
            position:'relative',
            bottom:'48.5%',
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
            bottom:'68.5%',
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
            bottom:'68%',
            left:'76%',
            width:'6.5%',
            height:'4.7%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-37/ASOC/PPF',
        style:{
            position:'relative',
            bottom:'85.1%',
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
            bottom:'97.4%',
            left:'63.4%',
            width:'8.6%',
            height:'6.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'KSC Industrial',
        style:{
            position:'relative',
            bottom:'97.5%',
            left:'46.6%',
            width:'14.7%',
            height:'10.5%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'LC-39',
        style:{
            position:'relative',
            bottom:'122.2%',
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
            bottom:'134.3%',
            left:'36.1%',
            width:'14.9%',
            height:'10.3%',
            borderRadius:'50%',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'CIDCO Park',
        style:{
            position:'relative',
            bottom:'107%',
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
            bottom:'130.5%',
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
            bottom:'86.3%',
            left:'60.7%',
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