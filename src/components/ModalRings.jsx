import { borderColor } from '@mui/system'
import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const ModalRings =({location, item}) =>{
    const {mode} = useContext(AppContext)
    const styles=[{
        location:'Cape Central',
        style:{
            position:'relative',
            bottom:'-42.2%',
            left:'66.7%',
            width:'16.6%',
            height:'12%',
            borderRadius:'50%',
            // backgroundColor:'orange',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Port',
        style:{
            position:'relative',
            bottom:'-44.2%',
            left:'63.8%',
            width:'6.9%',
            height:'5.6%',
            borderRadius:'50%',
            // backgroundColor:'orange',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-20/16/LZ',
        style:{
            position:'relative',
            bottom:'-20.9%',
            left:'74.2%',
            width:'10%',
            height:'7%',
            borderRadius:'50%',
            // backgroundColor:'orange',
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-36/46',
        style:{
            position:'relative',
            bottom:'-21.2%',
            left:'80.1%',
            width:'7.4%',
            height:'5.6%',
            borderRadius:'50%',
            //backgroundColor:'orange',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-37/ASOC/PPF',
        style:{
            position:'relative',
            bottom:'-2.1%',
            left:'66.6%',
            width:'10%',
            height:'6.5%',
            borderRadius:'50%',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'CX-40/41/SPOC',
        style:{
            position:'relative',
            bottom:'11.1%',
            left:'65.2%',
            width:'10%',
            height:'7%',
            borderRadius:'50%',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'KSC Industrial',
        style:{
            position:'relative',
            bottom:'11.3%',
            left:'46.1%',
            width:'16.7%',
            height:'12%',
            borderRadius:'50%',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'LC-39',
        style:{
            position:'relative',
            bottom:'39.6%',
            left:'50%',
            width:'16.8%',
            height:'12%',
            borderRadius:'50%',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'SLF',
        style:{
            position:'relative',
            bottom:'53.5%',
            left:'34.4%',
            width:'16.7%',
            height:'12%',
            borderRadius:'50%',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'CIDCO Park',
        style:{
            position:'relative',
            bottom:'22.5%',
            left:'21.4%',
            width:'7%',
            height:'5.2%',
            borderRadius:'50%',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },{
        location:'Astrotech',
        style:{
            position:'relative',
            bottom:'49.3%',
            left:'10.1%',
            width:'7%',
            height:'5.2%',
            borderRadius:'50%',
            
            border:((item[0].type==='Clear')?'4px solid green':(item[0].category==='Watch')? '4px solid yellow':'4px solid red')
        }
    },
    {
        location:'Patrick SFB',
        style:{
            position:'relative',
            bottom:'-1%',
            left:'62%',
            width:'7.6%',
            height:'5.3%',
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