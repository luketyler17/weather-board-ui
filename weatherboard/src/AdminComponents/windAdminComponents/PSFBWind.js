import React from "react";
import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../context/AppContext";
import { TextField } from "@mui/material"




const PSFBWind = () => {
    const { PSFBWindProperties, setPSFBWindProperties, PSFBCheckedValues, setPSFBCheckedValues } = useContext(AppContext);

    //have to make some type of stateful object, that holds the value from the checkboxes & the value of the direction/speed
    const handleCheck = (event) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        if (PSFBCheckedValues.includes(event.target.value)) {
            let newArr = PSFBCheckedValues.filter(value => value !== event.target.value)
            setPSFBCheckedValues(newArr)
        } else {
            setPSFBCheckedValues([...PSFBCheckedValues, event.target.value])
        }
        //if event.target.value does not exist within checkedValues, push to checkedValues
        //if the event.tagert value exists within checkedValues, then filter and push new array to checkedValues, it means that value has been unclicked
    }

    const handleNumber = (event) => {
        let name = event.currentTarget.id
        setPSFBWindProperties({ ...PSFBWindProperties, [name]: event.target.value })
        //have checks that are based on the ID that push the values to windProperties
        //setWindProperties({...windProperties, [name]: event.target.value})

    }
    //(event.currentTarget.id)
    //event.target.value
    console.log(PSFBWindProperties)

    return (
        <>
            <div style={{
                margin: '15px',
            }}>
                <div style={{
                    display: 'flex',
                    marginTop: '15px',
                }}>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"25 kt observed"}
                                onChange={(e) => handleCheck(e)}
                                disabled={PSFBCheckedValues.includes("25 kt observed clear") == true}
                            />
                            <span style={{
                            }}>25 kt observed</span>
                        </label>
                    </div>
                    <div style={{
                        width: '25%',
                    }}>

                        <TextField id="25 kt observed" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={PSFBCheckedValues.includes("25 kt observed clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />
                    </div>
                    <div style={{ width: '25%', }}></div>
                    <div>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"25 kt observed clear"}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>Cancel</span>
                        </label>
                    </div>

                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '5px',
                }}>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }}
                                onChange={(e) => handleCheck(e)}
                                value={"Strong Winds"}
                                disabled={PSFBCheckedValues.includes("Strong Winds clear") == true}

                            />
                            <span style={{
                                width: '50%',
                            }}>Strong Winds </span>
                        </label>
                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Strong Winds 1" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',

                        }}
                            disabled={PSFBCheckedValues.includes("Strong Winds clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />
                    </div>

                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Strong Winds 2" type="number" label="Speed" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={PSFBCheckedValues.includes("Strong Winds clear") == true}
                            onChange={(e) => handleNumber(e)} />

                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"Strong Winds clear"}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>Cancel</span>
                        </label>

                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '15px',
                }}>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} onChange={(e) => handleCheck(e)}
                                value={"Damaging Winds"}
                                disabled={PSFBCheckedValues.includes("Damaging Winds clear") == true}
                            />
                            <span style={{
                                width: '50%',
                            }}>Damaging Winds</span>
                        </label>

                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Damaging Winds 1" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={PSFBCheckedValues.includes("Damaging Winds clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />


                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Damaging Winds 2" type="number" label="Speed" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={PSFBCheckedValues.includes("Damaging Winds clear") == true}
                            onChange={(e) => handleNumber(e)} />
                    </div>

                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"Damaging Winds clear"}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>Cancel</span>
                        </label>
                    </div>


                </div>
            </div>
        </>
    )
}
export default PSFBWind