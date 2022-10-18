
import { AppContext } from "../../context/AppContext";
import { useState, useEffect, useContext } from "react"
import { TextField } from "@mui/material"

const KSCWind = () => {

    const { KSCWindProperties, setKSCWindProperties, KSCCheckedValues, setKSCCheckedValues } = useContext(AppContext);

    //have to make some type of stateful object, that holds the value from the checkboxes & the value of the direction/speed
    const handleCheck = (event) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        if (KSCCheckedValues.includes(event.target.value)) {
            let newArr = KSCCheckedValues.filter(value => value !== event.target.value)
            setKSCCheckedValues(newArr)
        } else {
            setKSCCheckedValues([...KSCCheckedValues, event.target.value])
        }
        //if event.target.value does not exist within checkedValues, push to checkedValues
        //if the event.tagert value exists within checkedValues, then filter and push new array to checkedValues, it means that value has been unclicked
    }

    const handleNumber = (event) => {
        let name = event.currentTarget.id
        setKSCWindProperties({ ...KSCWindProperties, [name]: event.target.value })
        //have checks that are based on the ID that push the values to windProperties
        //setWindProperties({...windProperties, [name]: event.target.value})
        console.log(event.currentTarget.id)
        console.log(event.target.value)
    }

    console.log(KSCWindProperties)

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
                            }} value={"18 kt steady-state"}
                                onChange={(e) => handleCheck(e)}
                                disabled={KSCCheckedValues.includes("18 kt steady-state clear") == true}
                            />
                            <span style={{
                            }}>18 kt steady-state</span>
                        </label>
                    </div>
                    <div style={{
                        width: '25%',
                    }}>

                        <TextField id="18 kt steady-state" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={KSCCheckedValues.includes("18 kt steady-state clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />
                    </div>
                    <div style={{ width: '25%', }}></div>
                    <div>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"18 kt steady-state clear"}
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
                                disabled={KSCCheckedValues.includes("Strong Winds clear") == true}

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
                            disabled={KSCCheckedValues.includes("Strong Winds clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />
                    </div>

                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Strong Winds 2" type="number" label="Speed" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={KSCCheckedValues.includes("Strong Winds clear") == true}
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
                                disabled={KSCCheckedValues.includes("Damaging Winds clear") == true}
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
                            disabled={KSCCheckedValues.includes("Damaging Winds clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />


                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Damaging Winds 2" type="number" label="Speed" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={KSCCheckedValues.includes("Damaging Winds clear") == true}
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
export default KSCWind