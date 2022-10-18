
import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useState, useContext } from "react"
import InnerStormConditions from './innerStormConditions'


const SevereStormBar = ({ states, location }) => {

    if (states === undefined || states.length === 0 || location===undefined) {
        return (
            <>
            <div style={{
                display: 'flex',
                marginBottom: '5px',
            }}>
                Expected Wind
                <div style={{
                    width: '100%',
                    margin: '0 auto',
                    marginRight: '5px',
                    marginBottom: '5px',
                    backgroundColor: '#66ff00',
                    borderRadius: '25px',
                    textAlign: 'left',
                    paddingLeft: '5px',
                    filter: 'drop-shadow(0 2px 0.2rem black',
                }}
                ><BsCheckCircle /> Clear
                </div>
                
            </div>
                        <div style={{
                            display: 'flex',
                            marginBottom: '5px',
                        }}>Expected Hail
                            <div style={{
                                width: '100%',
                                margin: '0 auto',
                                marginRight: '5px',
                                marginBottom: '5px',
                                backgroundColor: '#66ff00',
                                borderRadius: '25px',
                                textAlign: 'left',
                                paddingLeft: '5px',
                                filter: 'drop-shadow(0 2px 0.2rem black',
                            }}
                            ><BsCheckCircle /> Clear
                            </div>
                            
                        </div>
                        </>
        )
    } else {
        return (
            states.map((item) => {
                return (
                    <InnerStormConditions item={item} />

                )
            })
        )
    }

}

export default SevereStormBar