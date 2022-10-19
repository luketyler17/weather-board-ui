import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import MobileInnerWindConditions from './mobileInnerWindCond'
import { useState, useContext } from "react"

const MobileInnerWind = ({ states, category }) => {
    if (states.length === 0) {
        return (
            <div style={{
                display: 'flex',
                marginBottom: '5px',
            }}>
                <div style={{
                    width: '30%',
                    margin: '0',
                    fontSize:'40%'
                }}>
                    {category}
                </div>

                <div style={{
                    width: '70%',
                    margin: '0 auto',
                    marginRight: '5px',
                    marginBottom: '5px',
                    backgroundColor: '#66ff00',
                    borderRadius: '25px',
                    textAlign: 'left',
                    paddingLeft: '5px',
                    filter: 'drop-shadow(0 2px 0.2rem black',
                }}
                ><BsCheckCircle />&nbsp; Clear
                </div>

            </div>
        )
    } else {
        return (
            states.map((item) =>{ return (<MobileInnerWindConditions item={item} category={category}/>)
                
            })
        )
    }
}

export default MobileInnerWind