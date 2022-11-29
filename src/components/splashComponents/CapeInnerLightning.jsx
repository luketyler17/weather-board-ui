import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import CapeInnerConditions from './CapeInnerConditions'
import { useState, useContext } from "react"

const CapeInnerLightning = ({ states, location }) => {
    
     if (states.length === 0) {
        return (
            <div style={{
                display: 'flex',
                marginBottom: '5px',
            }}>
                <div style={{
                    width: '50%',
                    margin: '0',
                    verticalAlign: 'middle',
                    color: '#03AD00',
                    fontWeight: 'bold'
                }}>
                    {location}
                </div>

                <div style={{
                    width: '70%',
                    margin: '0 auto',
                    marginRight: '5px',
                    marginBottom: '5px',
                    backgroundColor: '#F8FFF8',
                    border: '3px solid #03AD00',
                    borderRadius: '25px',
                    textAlign: 'left',
                    paddingLeft: '5px',
                    filter: 'drop-shadow(0 2px 0.2rem black',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    height: 'auto',
                }}>
                    <BsCheckCircle />&nbsp; Clear
                </div>

            </div>
        )
    } else {
        return (
            states.map((item, index) => <CapeInnerConditions key={index} item={item} location={location}/>)
        )
    }
}

export default CapeInnerLightning