import React, { useContext } from 'react'
import { Card, Paper } from '@mui/material'
import { AppContext } from '../../context/AppContext'

const LightningProfile = () => {
    const {
        setCapeLightningToggle,
        setPsfbLightningToggle,
        setKscLightningToggle,
        setOtherLightningToggle,
        capeLightningToggle,
        kscLightningToggle,
        psfbLightningToggle,
        otherLightningToggle,
        OtherLightning,
        setOtherLightning,
        CCSFSLightning,
        setCCSFSLightning,
        KSCLightning, 
        setKSCLightning,
    } = useContext(AppContext)
    const cardStyle = {
        height: '90%',
        width: '24%',
        marginTop: '.5%'
    }
    const handleCapeToggle = () => {
        capeLightningToggle === true ? setCapeLightningToggle(false) : setCapeLightningToggle(true)
    }
    const handleKscToggle = () =>{
        kscLightningToggle === true ? setKscLightningToggle(false) : setKscLightningToggle(true)
    }
    const handleOtherToggle = () =>{
        otherLightningToggle === true ? setOtherLightningToggle(false) : setOtherLightningToggle(true)  
    }
    const handlePsfbToggle = () =>{
        psfbLightningToggle === true ? setPsfbLightningToggle(false) : setPsfbLightningToggle(true)
    }
    const handleOtherLocations = (location) =>{
        OtherLightning.includes(location) ? setOtherLightning(OtherLightning.filter(i => i !== location)) : setOtherLightning([...OtherLightning, location])
    }
    const handleCCSFSLocations = (location) =>{
        CCSFSLightning.includes(location) ? setCCSFSLightning(CCSFSLightning.filter(i => i !== location)) : setCCSFSLightning([...CCSFSLightning, location])
    }
    const handleKSCLocations = (location) =>{
        KSCLightning.includes(location) ? setKSCLightning(KSCLightning.filter(i => i !== location)) : setKSCLightning([...KSCLightning, location])
    }
    return (
        <>
            <Card sx={cardStyle} style={{width:'38%', height:'94%'}}>
                <Paper elevation={2} sx={{ width:'100%', height:'20%', display:'flex', justifyContent:'center'}}>
                <label style={{width:'100%', paddingLeft:'28%', marginTop:'2%'}}>
                    <input type='checkbox'
                        value={'CCSFS'}
                        style={{ margin: '1%' }}
                        onChange={handleCapeToggle}
                        
                    /> {capeLightningToggle === true ? 'Disable All Cape Canaveral Lightning Monitoring':
                    'Enable All Cape Canaveral Lightning Monitoring'}
                </label>
                </Paper>
                <div style ={{width:'100%', display:'flex', flexDirection:'row', flexWrap:'wrap', marginTop:'1%'}}>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'Cape Central'}
                           style={{margin:'1%'}}
                            onChange={()=> handleCCSFSLocations('Cape Central')}
                            disabled ={capeLightningToggle === false}
                    />{CCSFSLightning.includes('Cape Central') ? 'Disable Cape Central Monitoring' : 'Enable Cape Central Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={"CX-20/16/LZ"}
                           style={{margin:'1%'}}
                            onChange={()=> handleCCSFSLocations("CX-20/16/LZ")}
                            disabled ={capeLightningToggle === false}
                    />{CCSFSLightning.includes("CX-20/16/LZ") ? 'Disable CX-20/16/LZ Monitoring' : 'Enable CX-20/16/LZ Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'CX-36/46'}
                           style={{margin:'1%'}}
                            onChange={()=> handleCCSFSLocations('CX-36/46')}
                            disabled ={capeLightningToggle === false}
                    />{CCSFSLightning.includes('CX-36/46') ? 'Disable CX-36/46 Monitoring' : 'Enable CX-36/46 Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'CX-37/ASOC/PPF'}
                           style={{margin:'1%'}}
                            onChange={()=> handleCCSFSLocations('CX-37/ASOC/PPF')}
                            disabled={capeLightningToggle === false}
                    />{CCSFSLightning.includes('CX-37/ASOC/PPF') ? 'Disable CX-37/ASOC/PPF Monitoring' : 'Enable CX-37/ASOC/PPF Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                <input type='checkbox'
                           value={'CX-40/41/SPOC'}
                           style={{margin:'1%'}}
                            onChange={()=> handleCCSFSLocations('CX-40/41/SPOC')}
                            disabled ={capeLightningToggle === false}
                    />{CCSFSLightning.includes('CX-40/41/SPOC') ? 'Disable CX-40/41/SPOC Monitoring' : 'Enable CX-40/41/SPOC Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'Port'}
                           style={{margin:'1%'}}
                            onChange={()=> handleCCSFSLocations('Port')}
                            disabled ={capeLightningToggle === false}
                    />{CCSFSLightning.includes('Port') ? 'Disable Port Monitoring' : 'Enable Port Monitoring'}
                </label>
                </div>
            </Card>
            <Card sx={cardStyle} style={{width:'38%', height:'94%'}}> 
            <Paper elevation={2} sx={{ width:'100%', height:'20%', display:'flex', justifyContent:'center'}}>
            <label style={{width:'100%', paddingLeft:'20%', marginTop:'2%'}}>
                    <input type='checkbox'
                        value={'KSC'}
                        style={{ margin: '1%' }}
                        onChange={handleKscToggle}
                        
                    /> {kscLightningToggle === true ? 'Disable All Kennedy Space Center Lightning Monitoring':
                    'Enable All Disable Kennedy Space Center Lightning Monitoring'}
                </label>
            </Paper>
            <div style ={{width:'100%', display:'flex', flexDirection:'column', marginTop:'1%'}}>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'KSC Industrial'}
                           style={{margin:'1%'}}
                            onChange={()=> handleKSCLocations('KSC Industrial')}
                            disabled = {kscLightningToggle === false}
                    />{KSCLightning.includes('KSC Industrial') ? 'Disable KSC Industrial Monitoring' : 'Enable KSC Industrial Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'LC-39'}
                           style={{margin:'1%'}}
                            onChange={()=> handleKSCLocations('LC-39')}
                            disabled = {kscLightningToggle === false}
                    />{KSCLightning.includes('LC-39') ? 'Disable LC-39 Monitoring' : 'Enable LC-39 Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'10%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'SLF'}
                           style={{margin:'1%'}}
                            onChange={()=> handleKSCLocations('SLF')}
                            disabled = {kscLightningToggle === false}
                    />{KSCLightning.includes('SLF') ? 'Disable SLF Monitoring' : 'Enable SLF Monitoring'}
                </label>
                </div>
                </Card>
            <div style= {{display:'flex', flexDirection:'column', width:'22%'}}>
            <Card sx={cardStyle} style={{width:'100%', height:'63%', marginTop:'2.4%'}}>
                <Paper elevation={2} sx={{ width:'100%', height:'30%', display:'flex', justifyContent:'center'}}>
                <label style={{width:'100%', paddingLeft:'20%', marginTop:'4%'}}>
                    <input type='checkbox'
                        value={'Other'}
                        style={{ margin: '1%' }}
                        onChange={handleOtherToggle}
                        
                    /> {otherLightningToggle === true ? 'Disable All Other Lightning Monitoring':
                    'Enable All Other Lightning Monitoring'}
                </label>
                </Paper>
                <div style ={{width:'100%', display:'flex', flexDirection:'column', marginTop:'5%'}}>
                <label style={{width:'100%', paddingLeft:'14%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'CIDCO Park'}
                           style={{margin:'1%'}}
                            onChange={()=> handleOtherLocations('CIDCO Park')}
                            disabled = {otherLightningToggle === false}
                    />{OtherLightning.includes('CIDCO Park') ? 'Disable CIDCO Park Monitoring' : 'Enable CIDCO Park Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:'14%', margin:'1%'}}>
                    <input type='checkbox'
                           value={'Astrotech'}
                           style={{margin:'1%'}}
                            onChange={()=> handleOtherLocations('Astrotech')}
                            disabled = {otherLightningToggle === false}
                    />{OtherLightning.includes('Astrotech') ? 'Disable Astrotech Monitoring' : 'Enable Astrotech Monitoring'}
                </label>
                </div>
                 </Card>

                 <Card sx={cardStyle} style={{width:'100%', height:'28%', marginTop:'2%'}}>
                    <label style= {{width:'100%', paddingLeft:'15%', marginTop:'9%'}}>
                    <input type='checkbox'
                        value={'PSFB'}
                        style={{ margin: '1%' }}
                        onChange={handlePsfbToggle}
                    /> {psfbLightningToggle === true ? 'Disable Patrick SFB Lightning Monitoring':
                    'Enable Patrick SFB Lightning Monitoring'}
                </label></Card>
                </div>   
        </>
    )
}

export default LightningProfile