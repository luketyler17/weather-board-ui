import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AppContext } from '../../context/AppContext'
import React, {useContext} from 'react'

const MobileInnerWindConditions = ({ item, category}) => {
    const {showCountdowns} = useContext(AppContext)
    let border = (item.type == 'Clear' ? '#035600' : (item.type == 'Warning') ? '#C90000' : (item.type == 'Watch') ? '#D68E24' : '#B800F9')
    return (
        <div style={{
            display: 'flex',
            marginBottom: '5px',
            lineHeight: '100%'

        }}>
            <div style={{
                width: '30%',
                margin: '1px',
                verticalAlign: 'middle',
                color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? '#C90000' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)'),
                fontWeight: 'bold',
                fontSize:'61%'

            }}>
                {category} <div style={{
                    fontStyle: 'italic',
                    color: '#747474'
                }}>{item.type==='Clear'?'Clear':`Winds From:${item.direction}°`}</div>
            </div>


            <div style={{
                width: '66%',
                margin: '0 auto',
                marginRight: '5px',
                marginBottom: '5px',
                backgroundColor: (item.type == 'Clear' ? '#F8FFF8' : (item.type == 'Warning') ? '#C90000' : (item.type == 'Watch') ? '#FFFF97' : '#F2DCFA'),
                border: `2px solid ${border}`,
                borderRadius: '25px',
                textAlign: 'left',
                paddingLeft: '5px',
                filter: 'drop-shadow(0 2px 0.2rem black',
                display: 'flex',
                justifyContent: 'space-evenly',
                height: 'auto',
            }}>
                <div style={{
                    width: '5%'
                }}><div style={{
                    width: '95%',
                    marginTop: '3px',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    marginBottom: '3px',
                }}>
                        {item.type === 'Clear' && <BsCheckCircle style={{ color: '#03AD00', height: '100%', width: '100%' }} />}
                        {item.type === 'Watch' && <BsExclamationCircle style={{ color: '#D68E24', height: '100%', width: '100%'  }} />}
                        {item.type === 'Warning' && <HiOutlineXCircle style={{ color: 'white' , height: '100%', width: '100%' }} />}
                        {item.type === 'Advisory' && <AiOutlineQuestionCircle style={{ color: 'rgba(223, 0, 254)', height: '100%', width: '100%'  }} />}
                    </div>
                </div>
                <div style={{
                    width: '20%',
                    color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? 'white' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        fontSize:'70%',
                    }}>
                        {item.type}
                    </div>
                </div>
                <div style={{
                    width: '20%',

                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        fontSize:'70%',
                        color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? 'white' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
                    }}>
                        {item.start.slice(11, 16)}
                    </div>
                </div>
                <div style={{
                    width: '20%',
                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        fontSize:'70%',
                        color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? 'white' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
                    }}>
                        {item.type == 'Clear' ? '00:00' : (item.type == 'Warning' ? (item.end.slice(11, 16)) : "INDEF")}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MobileInnerWindConditions