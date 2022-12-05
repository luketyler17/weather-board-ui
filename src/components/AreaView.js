import React, { useState, useContext } from 'react'
import { Card } from '@mui/material'
import { Paper, useMediaQuery } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LeftBar from './LeftBar';
import { AppContext } from '../context/AppContext';
import Box from '@mui/material/Box';
import InnerLightning from './splashComponents/innerLightning'
import InnerWind from './splashComponents/innerWInd'
import SevereStormBar from './splashComponents/severeStormBar'
import Cookies from 'universal-cookie'
import { BsLightning } from 'react-icons/bs'
import { RiWindyLine } from 'react-icons/ri'
import { RiThunderstormsLine } from 'react-icons/ri'
import AreaSevereStorms from './splashComponents/areaSevereStorms'
import AreaRing from './AreaRing'

const cookies = new Cookies()

const AreaView = () => {
    
    const { lightning, storm, wind, area, setArea, imagePath, setImagePath, showCountdowns, themeToggle } = useContext(AppContext)
    
   if(area!==[]){ 
    cookies.set('area', area, {path:'/'})
    cookies.set('imagePath', imagePath, {path:'/'})
    }
    
    const flexBasis = useMediaQuery('(min-width: 1200px)')
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row',paddingTop:(flexBasis ? '3%' : '8%'), bgcolor: (themeToggle === false ? 'text.primary': 'background.default') }}>
            <LeftBar />
            <Card sx={{ height: '20%', width: '100%', marginLeft: '7.5%', marginRight: '5%',}}>
                <Card elevation={10}  sx={{position:'relative', display: 'flex', height: '20%', margin: '10px', justifyContent: 'center', marginTop:'5%',  }}>
                    <Box >
                    <img src={imagePath} alt="placehoder"
                        style={{
                            width: 'auto',
                            maxHeight: '800px',
                            height: 'auto',
                            margin: '10px'
                        }}
                    />
                    {area.map((location)=>{
                        return(
                            <AreaRing location={location} item={lightning.filter((item) => item.location === location)}/>
                        )
                    })}
                    </Box>
                </Card>
                <Card elevation={10} sx={{ margin: '10px' }}><h4><BsLightning/> Lightning</h4>
                    <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '10px', bgcolor:'primary.main'}}>
                        <Card  sx={{
                            width:'100%',
                            height:'20%',
                            display: 'flex',
                            flexDirection:'row',
                            marginBottom:'5px',
                            bgcolor:'primary.secondary'
                            
                        }}>
                            <div style={{
                                width:'45%',
                                margin:'0'
                                
                            }}/>
                                <div style={{
                                    width:'55%',
                                    display:'flex',
                                    flexDirection:'space-evenly'
                                    
                                }}>
                                    <div style={{
                                        width:'21%',
                                        
                                        textAlign:'left',
                                        paddingLeft:'5%'
                                    }}>Status</div>
                                    <div style={{
                                        width:'22%',
                                        
                                        textAlign:'center'
                                    }}>Start Time</div>
                                    <div style={{
                                        width:'22%',
                                        
                                        textAlign:'center'
                                    }}>End Time</div>
                                    <div style={{
                                        width:'24%',
                                        
                                        textAlign:'right'
                                    }}>{showCountdowns===true && "  Countdown"}</div>
                                </div>
                            
                        </Card>
                        <Card >
                                        
                        {area.map((text, index) => (
                        <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', marginBottom:'20px', height: '25px', width: '100%', borderRadius: '20px', bgcolor:'primary.secondary' }}>
                                        <div style={{ height: '25px', width: '100%'}}>
                            <InnerLightning key={index} states={lightning.filter((item) => item.location === text)} location={text} />
                        </div>
                        </ListItem>
                        ))}
                        </Card>
                    </Paper>
                </Card>

                {area[0] !== 'CIDCO Park' &&
                    <Card elevation={10} sx={{ margin: '10px' }}><h4><RiWindyLine/> Winds</h4>
                    <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '10px', bgcolor:'primary.main' }}>
                    <Card sx={{
                            width:'100%',
                            height:'20%',
                            display: 'flex',
                            flexDirection:'row',
                            marginBottom:'2px',
                            bgcolor:'primary.secondary'
                            
                        }}>
                            <div style={{
                                width:'45%',
                                margin:'0'
                            }}/>
                                <div style={{
                                    width:'55%',
                                    display:'flex',
                                    flexDirection:'space-evenly'
                                    
                                }}>
                                    <div style={{
                                        width:'21%',
                                        
                                        textAlign:'left',
                                        paddingLeft:'5%'
                                    }}>Status</div>
                                    <div style={{
                                        width:'22%',
                                        
                                        textAlign:'center'
                                    }}>Start Time</div>
                                    <div style={{
                                        width:'22%',
                                        
                                        textAlign:'center'
                                    }}>End Time</div>
                                    <div style={{
                                        width:'24%',
                                        
                                        textAlign:'right'
                                    }}>{showCountdowns===true && "  Countdown"}</div>
                                </div>
                            
                        </Card>
                        <Card sx={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', width: 'calc(100%-5%)', boxSizing: 'border-box', width: 'calc(100%-5%)' }}>
                            {area[0] === 'Cape Central' &&
                                <ListItem sx={{ bgcolor:'primary.secondary', margin: '10px', height: '25px', boxSizing: 'border-box', width: 'calc(100%-5%)', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === '18 kt steady-state')} category={'18 kt steady-state'} />
                                    </div>
                                </ListItem>}
                            {area[0] === 'KSC Industrial' &&
                                <ListItem sx={{ bgcolor:'primary.secondary', margin: '10px', height: '25px', boxSizing: 'border-box', width: 'calc(100%-5%)', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'KSC').filter((i) => i.category === '18 kt steady-state')} category={'18 kt steady-state'} />
                                    </div>
                                </ListItem>}
                            {area[1] === 'Port' &&
                                <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === '22 kt steady-state')} category={'22 kt steady-state'}/>
                                    </div>
                                </ListItem>}
                            {area[0] === 'Patrick SFB' &&
                                <ListItem sx={{ width: 'auto', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'Patrick SFB').filter((i) => i.category === '25 kt observed')} category={'25 kt observed'} />
                                    </div>
                                    {/* <Paper sx={{height:'25px', width:'100%', bgcolor:'lightgrey' }}>
                                        
                                    </Paper> */}
                                </ListItem>}
                            {area[0] === 'Cape Central' &&

                                <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === 'Strong Winds')} category={'Strong Winds'} />
                                    </div>
                                </ListItem>

                            }
                            {area[0] === 'Cape Central' &&
                                <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === 'Damaging Winds')} category={'Damaging Winds'} />
                                    </div>
                                </ListItem>
                            }
                            {area[0] === 'KSC Industrial' &&
                                <>
                                    <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                        
                                        <div style={{ height: '25px', width:'100%' }}>
                                            <InnerWind states={wind.filter((item) => item.location === 'KSC').filter((i) => i.category === 'Strong Winds')} category={'Strong Winds'} />
                                        </div>
                                    </ListItem>
                                    <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>
                                        
                                        <div style={{ height: '25px', width:'100%' }}>
                                            <InnerWind states={wind.filter((item) => item.location === 'KSC').filter((i) => i.category === 'Damaging Winds')} category={'Damaging Winds'}/>
                                        </div>
                                    </ListItem>
                                </>
                            }

                            {area[0] === 'Patrick SFB' &&


                                <>
                                    <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                        
                                        <div style={{ height: '25px', width: '100%' }}>
                                            <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === 'Strong Winds')} category={'Strong Winds'} />
                                        </div>
                                    </ListItem>
                                    <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>
                                        
                                        <div style={{ height: '25px', width: '100%' }}>
                                            <InnerWind states={wind.filter((item) => item.location === 'Patrick SFB').filter((i) => i.category === 'Damaging Winds')} category={'Damaging Winds'} />
                                        </div>
                                    </ListItem>


                                </>
                            }

                        </Card>
                        </Paper>
                    </Card>
                }

                {area[0] !== 'CIDCO Park' &&
                    <Card elevation={10} sx={{ margin: '10px' }}><h4><RiThunderstormsLine/> Severe Storms</h4>
                    <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '10px', bgcolor:'primary.main' }}>
                    <Card sx={{
                            width:'100%',
                            height:'20%',
                            display: 'flex',
                            flexDirection:'row',
                            marginBottom:'2px'
                            
                        }}>
                            <div style={{
                                width:'45%',
                                margin:'0'
                            }}/>
                                <div style={{
                                    width:'55%',
                                    display:'flex',
                                    flexDirection:'space-evenly'
                                    
                                }}>
                                    <div style={{
                                        width:'21%',
                                        
                                        textAlign:'left',
                                        paddingLeft:'5%'
                                    }}>Status</div>
                                    <div style={{
                                        width:'22%',
                                        
                                        textAlign:'center'
                                    }}>Start Time</div>
                                    <div style={{
                                        width:'22%',
                                        
                                        textAlign:'center'
                                    }}>End Time</div>
                                    <div style={{
                                        width:'24%',
                                        
                                        textAlign:'right'
                                    }}>{showCountdowns===true && "  Countdown"}</div>
                                </div>
                            
                        </Card>
                        <Card  sx={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', width: 'calc(100%-5%)', boxSizing: 'border-box', width: 'calc(100%-5%)' }}>
                        {area[0] === 'KSC Industrial' &&
                            <>
                                
                            <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>   
                                    <div style={{ height: '25px', width: '100%' }}>
                                    <AreaSevereStorms states={storm.filter((item) => item.location === 'KSC')} location={'KSC'}>From:{storm.filter((item) => item.location === 'KSC').filter((i) => i.wind_direction)}&nbsp; At:{storm.filter((item) => item.location === 'KSC').filter((i) => i.wind_speed)}KT </AreaSevereStorms>
                                    </div>
                                </ListItem>
                           
                        </>
                        }

                        {area[0] === 'Cape Central' &&
                            <>
                                
                            <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>   
                                    <div style={{ height: '25px', width: '100%' }}>
                                    <AreaSevereStorms states={storm.filter((item) => item.location === 'CCSFS')} location={'CCSFS'}>From:{storm.filter((item) => item.location === 'CCSFS').filter((i) => i.wind_direction)}&nbsp; At:{storm.filter((item) => item.location === 'CCSFS').filter((i) => i.wind_speed)}KT </AreaSevereStorms>
                                    </div>
                                </ListItem>
                           
                        </>
                        }

                        {area[0] === 'Patrick SFB' &&
                            <>
                                
                                <ListItem sx={{ width: '30%', bgcolor:'primary.secondary', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>   
                                        <div style={{ height: '25px', width: '100%' }}>
                                        <AreaSevereStorms states={storm.filter((item) => item.location === 'PSFB')} location={'PSFB'}>From:{storm.filter((item) => item.location === 'PSFB').filter((i) => i.wind_direction)}&nbsp; At:{storm.filter((item) => item.location === 'PSFB').filter((i) => i.wind_speed)}KT </AreaSevereStorms>
                                        </div>
                                    </ListItem>
                               
                            </>
                        }
                        </Card>
                    </Paper>
                    </Card>
                }
            </Card>

        </Box>
    )
}

export default AreaView