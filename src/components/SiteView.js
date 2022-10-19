import React, { useState, useContext } from 'react'
import { Card } from '@mui/material'
import { Paper } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LeftBar from './LeftBar';
import { AppContext } from '../context/AppContext';
import Box from '@mui/material/Box';
import InnerLightning from './splashComponents/innerLightning'
import InnerWind from './splashComponents/innerWInd'
import SevereStormBar from './splashComponents/severeStormBar'
import SiteImage from './siteimage'
import Cookies from 'universal-cookie'
import { BsLightning } from 'react-icons/bs'
import { RiWindyLine } from 'react-icons/ri'
import { RiThunderstormsLine } from 'react-icons/ri'
import AreaSevereStorms from './splashComponents/areaSevereStorms'

const cookies = new Cookies()

const SiteView = () => {


    
    const imageArray=[
        {location:'Astrotech', imgsrc:'./images/astrotech.PNG'},
        {location:'Cape Central', imgsrc:'./images/cape central.PNG'},
        {location:'CIDCO Park', imgsrc:'./images/cidco park.PNG'},
        {location:'CX-20/16/LZ', imgsrc:'./images/cx-20-16.PNG'},
        {location:'CX-36/46', imgsrc:'./images/cx-36-46.PNG'},
        {location:'CX-37/ASOC/PPF', imgsrc:'./images/cx-37-asoc.PNG'},
        {location:'CX-40/41/SPOC', imgsrc:'./images/cx-40-41.PNG'},
        {location:'KSC Industrial', imgsrc:'./images/KSC Industrial.PNG'},
        {location:'LC-39', imgsrc:'./images/LC-39.PNG'},
        {location:'Port', imgsrc:'./images/port.PNG'},
        {location:'SLF', imgsrc:'./images/SLF.PNG'}
        
    ]
    
    const { lightning, wind, storm, area, site, setSite, showCountdowns  } = useContext(AppContext)
    
    
    if (site!==[]){
        cookies.set('site', site, {path:'/'})
        cookies.set('area', area, {path:'/'})
    }
    




    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <LeftBar/>
            <Card sx={{ height: '20%', width: '100%', backgroundColor: 'white', marginLeft: '20px', marginRight: '20px' }}>
                <Card elevation={10} sx={{ display: 'flex', height: '20%', margin: '10px', bgcolor: 'grey', justifyContent: 'center' }}>
                    <SiteImage images={imageArray.filter((item)=>item.location===site)} />
                </Card>
                <Card elevation={10} sx={{ margin: '10px', bgcolor: 'grey' }}><h4><BsLightning/> Lightning</h4>
                    <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                    <Card style={{
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
                        <Card>
                            <ListItem sx={{ bgcolor: 'white', margin: '10px', height: '25px', boxSizing: 'border-box', width: 'calc(100%-5%)', borderRadius: '20px', paddingBottom:'20px' }}>
                                <div style={{ height: '25px', width: '100%'}}>
                                    <InnerLightning states={lightning.filter((item) => item.location === site)} location={site} />
                                </div>
                            </ListItem>
                        </Card>
                    </Paper>
                </Card>

                {area[0] !== 'CIDCO Park' &&
                    <Card elevation={10} sx={{ margin: '10px', bgcolor: 'grey' }}><h4><RiWindyLine/> Winds</h4>
                    <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                    <Card style={{
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
                        <Card sx={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', width: 'calc(100%-5%)', boxSizing: 'border-box', width: 'calc(100%-5%)' }}>
                            {area[0] === 'Cape Central' &&
                                <ListItem sx={{ bgcolor: 'white', margin: '10px', height: '25px', boxSizing: 'border-box', width: 'calc(100%-5%)', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === '18 kt steady-state')} category={'18 kt steady-state'} />
                                    </div>
                                </ListItem>}
                            {area[0] === 'KSC Industrial' &&
                                <ListItem sx={{ bgcolor: 'white', margin: '10px', height: '25px', boxSizing: 'border-box', width: 'calc(100%-5%)', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'KSC').filter((i) => i.category === '18 kt steady-state')} category={'18 kt steady-state'} />
                                    </div>
                                </ListItem>}
                            {site === 'Port' &&
                                <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === '22 kt steady-state')} category={'22 kt steady-state'} />
                                    </div>
                                </ListItem>}
                            {area[0] === 'Patrick SFB' &&
                                <ListItem sx={{ width: 'auto', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'Patrick SFB').filter((i) => i.category === '25 kt observed')} category={'25 kt observed'} />
                                    </div>
                                    {/* <Paper sx={{height:'25px', width:'100%', bgcolor:'white' }}>
                                        
                                    </Paper> */}
                                </ListItem>}
                            {area[0] === 'Cape Central' &&

                                <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === 'Strong Winds')} category={'Strong Winds'} />
                                    </div>
                                </ListItem>

                            }
                            {area[0] === 'Cape Central' &&
                                <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>
                                    
                                    <div style={{ height: '25px', width:'100%' }}>
                                        <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === 'Damaging Winds')} category={'Damaging Winds'} />
                                    </div>
                                </ListItem>
                            }
                            {area[0] === 'KSC Industrial' &&
                                <>
                                    <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                        
                                        <div style={{ height: '25px', width:'100%' }}>
                                            <InnerWind states={wind.filter((item) => item.location === 'KSC').filter((i) => i.category === 'Strong Winds')} category={'Strong Winds'}/>
                                        </div>
                                    </ListItem>
                                    <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>
                                        
                                        <div style={{ height: '25px', width:'100%' }}>
                                            <InnerWind states={wind.filter((item) => item.location === 'KSC').filter((i) => i.category === 'Damaging Winds')} category={'Damaging Winds'} />
                                        </div>
                                    </ListItem>
                                </>
                            }

                            {area[0] === 'Patrick SFB' &&


                                <>
                                    <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px' }}>
                                        
                                        <div style={{ height: '25px', width:'100%' }}>
                                            <InnerWind states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === 'Strong Winds')} category={'Strong Winds'} />
                                        </div>
                                    </ListItem>
                                    <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>
                                        
                                        <div style={{ height: '25px', width:'100%' }}>
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
                <Card elevation={10} sx={{ margin: '10px', bgcolor: 'grey' }}><h4><RiThunderstormsLine/> Severe Storms</h4>
                    <Paper sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                    <Card style={{
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
                                
                            <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>   
                                    <div style={{ height: '25px', width: '100%' }}>
                                    <AreaSevereStorms states={storm.filter((item) => item.location === 'KSC')} location={'KSC'}>From:{storm.filter((item) => item.location === 'KSC').filter((i) => i.wind_direction)}&nbsp; At:{storm.filter((item) => item.location === 'KSC').filter((i) => i.wind_speed)}KT </AreaSevereStorms>
                                    </div>
                                </ListItem>
                           
                        </>
                        }

                        {area[0] === 'Cape Central' &&
                            <>
                                
                            <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>   
                                    <div style={{ height: '25px', width: '100%' }}>
                                    <AreaSevereStorms states={storm.filter((item) => item.location === 'CCSFS')} location={'CCSFS'}>From:{storm.filter((item) => item.location === 'CCSFS').filter((i) => i.wind_direction)}&nbsp; At:{storm.filter((item) => item.location === 'CCSFS').filter((i) => i.wind_speed)}KT </AreaSevereStorms>
                                    </div>
                                </ListItem>
                           
                        </>
                        }

                        {area[0] === 'Patrick SFB' &&
                            <>
                                
                                <ListItem sx={{ width: '30%', bgcolor: 'white', margin: '10px', height: '25px', width: '100%', borderRadius: '20px', paddingBottom:'20px' }}>   
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

export default SiteView