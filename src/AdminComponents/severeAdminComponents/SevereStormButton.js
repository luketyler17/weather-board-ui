import React from "react";
import styled from 'styled-components'
import Cookies from "universal-cookie";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

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
  background-color: white;
  color: #01042F;
  border: 1px solid #01042F;
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
}
`

const SevereStormButton = ({ severeType, locations, stormConditions, severeStormTime2, severeStormTime, severeStormStartDate, severeStormEndDate }) => {
  const {setLoading, toggle, setToggle} = useContext(AppContext);
  const url = 'https://weather-board.onrender.com'
  const handleSubmit = () => {
    let fullStart = severeStormStartDate + ' ' + severeStormTime + ":00"
    let fullEnd = severeStormEndDate + ' ' + severeStormTime2 + ":00"
    let user = cookie.get('authentication', { path: '/' })
    if (severeType.includes("Warning")) {
      fetch(`${url}/storm`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          is_active: true,
          type: severeType[0],
          location: locations,
          wind_speed: stormConditions["Expected Wind"],
          wind_direction: stormConditions["Direction"],
          hail_diameter: stormConditions["Expected Hail"],
          start: fullStart,
          end: fullEnd,
          user: user.user_name
        })
      }).then(res => res.json()).then(() =>{
        let number = toggle +1
        setToggle((number))
        setLoading(0)
      })
    } else if (severeType.includes("Watch")) {
      fetch(`${url}/storm`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          is_active: true,
          type: severeType[0],
          location: locations,
          wind_speed: 0,
          wind_direction: 0,
          hail_diameter: 0,
          start: fullStart,
          end: fullEnd,
          user: user.user_name
        })
      }).then(res => res.json()).then(() =>{
        let number= toggle +1
        
        setToggle((number))
        setLoading(0)
      })
    } else if (severeType.includes("Cancel")) {
      fetch(`${url}/storm`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          is_active: true,
          type: "Clear",
          location: locations,
          wind_speed: 0,
          wind_direction: 0,
          hail_diameter: 0,
          start: '1900-01-01 00:00:01',
          end: '1900-01-01 00:00:01',
          user: user.user_name
        })
      }).then(res => res.json()).then(() =>{
        let number = toggle +1
        setToggle((number))
        setLoading(0)
      })
    }
   
  }
  return (
    <>
      <Button onClick={handleSubmit} >Submit</Button>
    </>
  )
}

export default SevereStormButton