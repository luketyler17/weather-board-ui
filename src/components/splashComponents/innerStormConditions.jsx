import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import CountdownTimer from './CountdownTimer'
import { AppContext } from '../../context/AppContext'
import React, {useContext} from 'react'
const InnerStormConditions = ({item}) => {

    const {showCountdowns} = useContext(AppContext)
    let border = (item.type == 'Clear' ? '#035600' : (item.type == 'Warning') ? '#C90000' : (item.type == 'Watch') ? '#D68E24' : '#B800F9')
    return (
        <div style={{
            display: 'flex',
            marginBottom: '5px',
            lineHeight: '100%'

        }}>
            <div style={{
                width: '50%',
                margin: '0',
                verticalAlign: 'middle',
                color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? '#C90000' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)'),
                fontWeight: 'bold',
                marginLeft: '10px',
            }}>
                Expected Hail Size: {((item.type=='Clear') ? 'Clear': (item.type == 'Watch') ? 'Watch': (item.type =='Warning') ? `${item.hail_diameter} in`: 'Clear')}
                <div style={{
                    color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? '#C90000' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
                }}>Expected Winds: {((item.type == 'Clear') ? 'Clear': (item.type == 'Watch')? 'Watch' : (item.type =='Warning') ? `${item.wind_speed} KT` :'Clear')}</div>
            </div>

            <div style={{
                width: '70%',
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
                        {item.type === 'Clear' && <BsCheckCircle style={{ color: '#03AD00', height: '100%', width: 'auto' }} />}
                        {item.type === 'Watch' && <BsExclamationCircle style={{ color: '#D68E24', height: '100%', width: 'auto'  }} />}
                        {item.type === 'Warning' && <HiOutlineXCircle style={{ color: 'white' , height: '100%', width: 'auto' }} />}
                        {item.type === 'Advisory' && <AiOutlineQuestionCircle style={{ color: 'rgba(223, 0, 254)', height: '100%', width: 'auto'  }} />}
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
                        color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? 'white' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
                    }}>
                        {item.end.slice(11, 16)}
                    </div>
                </div>
                <div style={{
                    width: '22%'
                }}>{showCountdowns===true &&
                    <div style={{
                        backgroundColor: (item.type == 'Clear' ? '#F8FFF8' : (item.type == 'Warning') ? 'white' : (item.type == 'Watch') ? '#FFFF97' : '#F2DCFA'),
                        color: (item.type == 'Clear' ? '#03AD00' : (item.type == 'Warning') ? 'black' : (item.type == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)'),
                        width: '100%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        borderRadius: '5px',
                        textAlign: 'center',
                        border: '1px solid black',
                    }}>
                        <CountdownTimer item={item}/>
                    </div>}
                </div>
            </div>
        </div >
    )
}

export default InnerStormConditions