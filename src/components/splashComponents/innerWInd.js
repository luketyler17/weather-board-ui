import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import InnerWindConditions from './innerWindConditions'
import { useState, useContext } from "react"

const InnerWind = ({ states, category }) => {
    if (states.length === 0) {
        return (
            <div style={{
                display: 'flex',
                marginBottom: '5px',
            }}>
                <div style={{
                    width: '50%',
                    margin: '0'
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
            states.map((item, index) =>{ return (<InnerWindConditions key={index} item={item} category={category}/>)
                
            })
        )
    }
}

export default InnerWind