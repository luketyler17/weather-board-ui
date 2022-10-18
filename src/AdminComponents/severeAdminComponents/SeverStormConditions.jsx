import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react"


const SevereStormConditions = ({ severeType, setSevereType, stormConditions, setStormConditions, setStormConditionsChecked, stormConditionsChecked }) => {
    const expectedConditions = ["Expected Wind", "Expected Hail", "Direction"]
    const expectedCategory = ["Watch", "Warning", "Cancel"]

    const textInput = (e) => {
        let name = e.currentTarget.id
        setStormConditions({
            ...stormConditions, [name]: e.target.value
        })
    }
    const handleCheck = (e) => {
        let name = e.currentTarget.id

        if (stormConditionsChecked.includes(e.target.value)) {
            setStormConditionsChecked(stormConditionsChecked.filter(i => i != e.target.value))
            setStormConditions({
                ...stormConditions, [name]: undefined
            })
        } else {
            setStormConditionsChecked([...stormConditionsChecked, e.target.value])
            setStormConditions({
                ...stormConditions, [name]: undefined
            })

        }
    }
    const handleFirst = (e) => {
        if (severeType.includes(e.target.value)) {
            setSevereType(severeType.filter(i => i != e.target.value))
        } else {
            setSevereType([...severeType, e.target.value])
        }
    }

    return (
        <div>

            <div style={{
                display: "flex",
                width: '100%',
                margin: '0 auto',
                justifyContent: 'space-evenly',
                
            }}>
                <div style={{width:'25%'}}>
                    <label>
                        <input type="checkbox"
                            id={expectedCategory[0]}
                            style={{
                                margin: '15px',
                            }} value={expectedCategory[0]}
                            onChange={(e) => handleFirst(e)}
                            disabled={severeType.includes(expectedCategory[2]) == true || severeType.includes(expectedCategory[1]) == true}
                        />
                        <span style={{
                        }}>{expectedCategory[0]}</span>
                    </label>
                </div>
                <div style={{width:'25%'}}>
                    <label>
                        <input type="checkbox"
                            id={expectedCategory[1]}
                            style={{
                                margin: '15px',
                            }} value={expectedCategory[1]}
                            onChange={(e) => handleFirst(e)}
                            disabled={severeType.includes(expectedCategory[2]) == true || severeType.includes(expectedCategory[0]) == true}

                        />
                        <span style={{
                        }}>{expectedCategory[1]}</span>
                    </label>
                </div>
                <div style={{width:'27%'}}
                >
                    <label>
                        <input type="checkbox" style={{
                            margin: '15px',
                        }}
                            id={expectedCategory[2]}
                            value={expectedCategory[2]}
                            onChange={(e) => handleFirst(e)}
                            disabled={severeType.includes(expectedCategory[0]) == true || severeType.includes(expectedCategory[1]) == true}
                        />
                        <span style={{
                        }}>{expectedCategory[2]}</span>
                    </label>
                </div>
            </div>


            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    
                }}>
                    <div style={{
                        width: '25%',
                        
                    }}>
                        <label>
                            <input type="checkbox"
                                id={expectedConditions[0]}
                                style={{
                                    margin: '15px',
                                }} value={expectedConditions[0]}
                                disabled={severeType.includes(expectedCategory[1]) == false}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>{expectedConditions[0]}</span>
                        </label>
                    </div>
                    <div style={{
                        width: '25%',
                        
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }}
                                disabled={severeType.includes(expectedCategory[1]) == false}
                                id={expectedConditions[1]}
                                value={expectedConditions[1]}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>{expectedConditions[1]}</span>
                        </label>
                    </div>
                    <div style={{
                        width: '27%',
                        
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }}
                                disabled={severeType.includes(expectedCategory[1]) == false}
                                id={expectedConditions[2]}
                                value={expectedConditions[2]}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>{expectedConditions[2]}</span>
                        </label>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
                    <div style={{
                        width: '25%'
                    }}>

                        <TextField disabled={stormConditionsChecked.includes(expectedConditions[0]) == false} id={expectedConditions[0]} label="Wind Speed" variant="filled" type="number"
                            onChange={(e) => textInput(e)}
                        />
                    </div>

                    <div style={{
                        width: '25%'
                    }}>
                        <TextField disabled={stormConditionsChecked.includes(expectedConditions[1]) == false} id={expectedConditions[1]} label="Hail Size" variant="filled" type="number"
                            onChange={(e) => textInput(e)} />
                    </div>

                    <div style={{
                        width: '25%'
                    }}>
                        <TextField disabled={stormConditionsChecked.includes(expectedConditions[2]) == false} id={expectedConditions[2]} label="Direction" variant="filled" type="number"
                            onChange={(e) => textInput(e)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SevereStormConditions

