import React from "react";
import styled from 'styled-components'
import Cookies from "universal-cookie";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

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
`
const url = 'https://weatherwarn.herokuapp.com'

const AdminButton = ({ locations, violations, startTime, endTime, startDate, endDate }) => {
  const { toggle, setToggle } = useContext(AppContext);

  const handleSubmit = () => {

    console.log(locations, violations, startTime, endTime, startDate, endDate)
    let fullStart = startDate + ' ' + startTime + ":00"
    let fullEnd = endDate + ' ' + endTime + ":00"
    let user = cookie.get('authentication', { path: '/' })
    let category = ''
    console.log(violations)
    if (violations[0] === 'Phase 1') {
      category = 'Watch'
    } else if (violations[0] === 'Phase 2') {
      category = 'Warning'
    }
    if (violations[0] === 'Cancel') {
      category = 'N/A'
      violations[0] = 'Clear'
      fullStart = '1900-01-01 00:00:01'
      fullEnd = '1900-01-01 00:00:01'
    }
    if (locations !== undefined && violations !== undefined && startTime !== undefined && endTime !== undefined && user !== undefined && startDate !== undefined && endDate !== undefined && category !== undefined) {
      console.log(locations, violations, category, fullStart, fullEnd, user.user_name)
      fetch(`${url}/lightning`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          is_active: true,
          type: violations[0],
          location: locations,
          category: category,
          start: fullStart,
          end: fullEnd,
          user_name: user.user_name,
        })
      }).then(data => console.log(data)).then(() => {
        if (violations[0] === 'Clear') {
          violations[0] = 'Cancel'
        }
      }
      )
    }
    else {
      console.log("Somethings wrong")
      if (violations[0] === 'Clear') {
        violations[0] = 'Cancel'
      }
    }
    setToggle(!toggle)
  }

  return (
    <>
      <Button onClick={handleSubmit} >Submit</Button>
    </>
  )
}

export default AdminButton