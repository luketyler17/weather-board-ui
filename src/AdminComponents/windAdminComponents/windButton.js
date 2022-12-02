import React from "react";
import styled from 'styled-components'
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cookies from "universal-cookie";
let cookie = new Cookies()

const Button = styled.button`
border-radius: 50px;
height: 50px;
width: 200px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 18px;
font-weight: 700;
font-family: Kanit;
background-color: #01042F;
color: white;
&:hover {
  background-color:white;
  color: #01042F;
  border: 1px solid #01042F;
  opacity: 0.8;
  transform: scale (0.98);
  font-family: Kanit;
}
`

const WindButton = () => {

    const { setLoading, toggle, setToggle, CCcheckedValues, CCWindProperties, KSCCheckedValues, KSCWindProperties, PSFBCheckedValues, PSFBWindProperties, windTime, windTime2, windStartTime, windEndTime } = useContext(AppContext);
    const url = 'https://weather-board.onrender.com'

    const handleSubmit = () => {
        let fullStart = windStartTime + ' ' + windTime + ":00"
        let fullEnd = windEndTime + ' ' + windTime2 + ":00"
        let user = cookie.get('authentication', { path: '/' })
        let newToggle = (toggle ? false : true)

        if (CCcheckedValues.length > 0) {
            CCcheckedValues.map(value => {
                console.log(value)
                if (value === '18 kt steady-state' || value === '18 kt steady-state clear') {
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 1,
                            is_active: true,
                            type: (value === '18 kt steady-state clear') ? ("Clear") : ("Advisory"),
                            warning: (value === '18 kt steady-state clear') ? ("Clear") : ("Advisory"),
                            location: 'CCSFS',
                            category: '18 kt steady-state',
                            start: (value === '18 kt steady-state clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === '18 kt steady-state clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: CCWindProperties["18 kt steady-state"],
                            user_name: user.user_name
                        })

                    }).then(() => {
                        let number = toggle + 1

                        setToggle(number)
                        console.log('button', number)
                        setLoading(0)
                    })

                } else if (value === "22 kt steady-state" || value === '22 kt steady-state clear') {
                    console.log("value made it here", value)
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 2,
                            is_active: true,
                            type: (value === '22 kt steady-state clear') ? ("Clear") : ("Advisory"),
                            warning: (value === '22 kt steady-state clear') ? ("Clear") : ("Advisory"),
                            location: 'CCSFS',
                            category: '22 kt steady-state',
                            start: (value === '22 kt steady-state clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === '22 kt steady-state clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: CCWindProperties["22 kt steady-state"],
                            user_name: user.user_name
                        })
                    }).then(() => {
                        let number = toggle + 1

                        setToggle(number)
                        console.log('button', number)
                        setLoading(0)
                    })
                } else if (value === "Strong Winds" || value === "Strong Winds clear") {
                    console.log("value made it here", value)
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 3,
                            is_active: true,
                            type: (value === 'Strong Winds clear') ? ("Clear") : ("Warning"),
                            warning: (value === 'Strong Winds clear') ? ("Clear") : ("Warning"),
                            location: 'CCSFS',
                            category: 'Strong Winds',
                            start: (value === 'Strong Winds clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === 'Strong Winds clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: CCWindProperties["Strong Winds 1"],
                            speed: CCWindProperties["Strong Winds 2"],
                            user_name: user.user_name
                        })
                    }).then(() => {
                        let number = toggle + 1

                        setToggle(number)
                        console.log('button', number)
                        setLoading(0)
                    })
                } else if (value === "Damaging Winds" || value === "Damaging Winds clear") {
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 4,
                            is_active: true,
                            type: (value === 'Damaging Winds clear') ? ("Clear") : ("Warning"),
                            warning: (value === 'Damaging Winds clear') ? ("Clear") : ("Warning"),
                            location: 'CCSFS',
                            category: 'Damaging Winds',
                            start: (value === 'Damaging Winds clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === 'Damaging Winds clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: CCWindProperties["Damaging Winds 1"],
                            speed: CCWindProperties["Damaging Winds 2"],
                            user_name: user.user_name
                        })
                    }).then(() => {
                        let number = toggle + 1

                        setToggle(number)
                        console.log('button', number)
                        setLoading(0)
                    })
                }
            })
        } else if (KSCCheckedValues.length > 0) {
            KSCCheckedValues.map(value => {
                if (value === "18 kt steady-state" || value === "18 kt steady-state clear") {
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 8,
                            is_active: true,
                            type: (value === '18 kt steady-state clear') ? ("Clear") : ("Advisory"),
                            warning: (value === '18 kt steady-state clear') ? ("Clear") : ("Advisory"),
                            location: 'KSC',
                            category: '18 kt steady-state',
                            start: (value === '18 kt steady-state clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === '18 kt steady-state clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: KSCWindProperties["18 kt steady-state"],
                            user_name: user.user_name

                        })
                    }
                    ).then(() => {
                        let number = toggle + 1

                        setToggle(number)
                        console.log('button', number)
                        setLoading(0)
                    })
                } else if (value === "Strong Winds" || value === "Strong Winds clear") {
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 9,
                            is_active: true,
                            type: (value === 'Strong Winds clear') ? ("Clear") : ("Warning"),
                            warning: (value === 'Strong Winds clear') ? ("Clear") : ("Warning"),
                            location: 'KSC',
                            category: 'Strong Winds',
                            start: (value === 'Strong Winds clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === 'Strong Winds clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: KSCWindProperties["Strong Winds 1"],
                            speed: KSCWindProperties["Strong Winds 2"],
                            user_name: user.user_name
                        })
                    }).then(() => {
                        let number = toggle + 1

                        setToggle(number)
                        console.log('button', number)
                        setLoading(0)
                    })

                } else if (value === "Damaging Winds" || value === "Damaging Winds clear") {
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 10,
                            is_active: true,
                            type: (value === 'Damaging Winds clear') ? ("Clear") : ("Warning"),
                            warning: (value === 'Damaging Winds clear') ? ("Clear") : ("Warning"),
                            location: 'KSC',
                            category: 'Damaging Winds',
                            start: (value === 'Damaging Winds clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === 'Damaging Winds clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: KSCWindProperties["Damaging Winds 1"],
                            speed: KSCWindProperties["Damaging Winds 2"],
                            user_name: user.user_name
                        })
                    }).then(() => {
                        let number = toggle + 1

                        setToggle(number)
                        console.log('button', number)
                        setLoading(0)
                    })

                }
            }

            )
        } else if (PSFBCheckedValues.length > 0) {
            PSFBCheckedValues.map(value => {
                console.log("Made it to patrick")
                if (value === "25 kt observed" || value === "25 kt observed clear") {
                    console.log("Worked in PSFB")
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 5,
                            is_active: true,
                            type: (value === '25 kt observed clear') ? ("Clear") : ("Advisory"),
                            warning: (value === '25 kt observed clear') ? ("Clear") : ("Advisory"),
                            location: 'Patrick SFB',
                            category: '25 kt observed',
                            start: (value === '25 kt observed clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === '25 kt observed clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: PSFBWindProperties["25 kt observed"],
                            user_name: user.user_name
                        }).then(() => {
                            let number = toggle + 1

                            setToggle(number)
                            console.log('button', number)
                            setLoading(0)
                        })
                    }
                    )
                } else if (value === "Strong Winds" || value === "Strong Winds clear") {
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 6,
                            is_active: true,
                            type: (value === 'Strong Winds clear') ? ("Clear") : ("Warning"),
                            warning: (value === 'Strong Winds clear') ? ("Clear") : ("Warning"),
                            location: 'Patrick SFB',
                            category: 'Strong Winds',
                            start: (value === 'Strong Winds clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === 'Strong Winds clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: PSFBWindProperties["Strong Winds 1"],
                            speed: PSFBWindProperties["Strong Winds 2"],
                            user_name: user.user_name
                        }).then(() => {
                            let number = toggle + 1

                            setToggle(number)
                            console.log('button', number)
                            setLoading(0)
                        })
                    })


                } else if (value === "Damaging Winds" || value === "Damaging Winds clear") {
                    fetch(`${url}/wind`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: 7,
                            is_active: true,
                            type: (value === 'Damaging Winds clear') ? ("Clear") : ("Warning"),
                            warning: (value === 'Damaging Winds clear') ? ("Clear") : ("Warning"),
                            location: 'Patrick SFB',
                            category: 'Damaging Winds',
                            start: (value === 'Damaging Winds clear') ? '1900-01-01 00:00:01' : fullStart,
                            end: (value === 'Damaging Winds clear') ? '1900-01-01 00:00:01' : fullEnd,
                            direction: PSFBWindProperties["Damaging Winds 1"],
                            speed: PSFBWindProperties["Damaging Winds 2"],
                            user_name: user.user_name
                        }).then(() => {
                            let number = toggle + 1

                            setToggle(number)
                            console.log('button', number)
                            setLoading(0)
                        })
                    })
                }
            }
            )
        }
    }

    return (
        <>
            <Button onClick={handleSubmit} >Submit</Button>
        </>
    )
}

export default WindButton
