import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import CountdownTimer from './CountdownTimer'
import { AppContext } from '../../context/AppContext'
import React, {useContext} from 'react'
const InnerAreaStorms = ({item}) => {

    const{showCountdowns} = useContext(AppContext)
    const { mode } = useContext(AppContext)
    let border = (
        (item.type == 'Clear' ? mode.clear.border : (item.type == 'Warning') ? mode.warning.border : (item.type == 'Watch') ? mode.watch.border : mode.advisory.border)
        )
    return (
        <div style={{
            display: 'flex',
            marginBottom: '5px',
            lineHeight: '100%'

        }}>
            <div style={{
                width: '50%',
                height:'auto',
                margin: '0',
                verticalAlign: 'middle',
                color: (item.type == 'Clear' ? mode.clear.locationColor : (item.type == 'Warning') ? mode.warning.locationColor : (item.type == 'Watch') ? mode.watch.locationColor : mode.advisory.locationColor),
                fontWeight: 'bold',

            }}>
                Expected Hail Size: {((item.type=='Clear') ? 'Clear': (item.type == 'Watch') ? 'Watch': (item.type =='Warning') ? `${item.hail_diameter} in`: 'Clear')}
                <div style={{
                    color: (item.type == 'Clear' ? mode.clear.locationColor : (item.type == 'Warning') ? mode.warning.locationColor : (item.type == 'Watch') ? mode.watch.locationColor : mode.advisory.locationColor)
                }}>Expected Winds: {((item.type == 'Clear') ? 'Clear': (item.type == 'Watch')? 'Watch' : (item.type =='Warning') ? `From: ${item.wind_direction}° at ${item.wind_speed} KT` :'Clear')}</div>
            </div>


            <div style={{
                width: '70%',
                margin: '0 auto',
                marginRight: '5px',
                marginBottom: '5px',
                backgroundColor: ((item.type === 'Clear')? mode.clear.innerDiv : (item.type === 'Warning') ? mode.warning.innerDiv : (item.type==='Watch')? mode.watch.innerDiv : mode.advisory.innerDiv),
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
                        {item.type === 'Clear' && <BsCheckCircle style={{color: mode.clear.iconColor, height:'100%', width:'auto'}} />}
                        {item.type === 'Watch' && <BsExclamationCircle style={{ color: mode.watch.iconColor, height: '100%', width: 'auto' }} />}
                        {item.type === 'Warning' && <HiOutlineXCircle style={{ color: mode.warning.iconColor, height: '100%', width: 'auto' }} />}
                        {item.type === 'Advisory' && <AiOutlineQuestionCircle style={{ color: mode.advisory.iconColor, height: '100%', width: 'auto' }} />}
                    </div>
                </div>
                <div style={{
                    width: '20%',
                    color: (item.type == 'Clear' ? mode.clear.textColor : (item.type == 'Warning') ? mode.warning.textColor : (item.type == 'Watch') ? mode.watch.textColor : mode.advisory.textColor)
                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.type == 'Warning') ? mode.warning.textColor : (item.type == 'Watch') ? mode.watch.textColor : mode.advisory.textColor)
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
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.type == 'Warning') ? mode.warning.textColor : (item.type == 'Watch') ? mode.watch.textColor : mode.advisory.textColor)
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
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.type == 'Warning') ? mode.warning.textColor : (item.type == 'Watch') ? mode.watch.textColor : mode.advisory.textColor)
                    }}>
                        {item.end.slice(11, 16)}
                    </div>
                </div>
                <div style={{
                    width: '22%'
                }}>{showCountdowns===true &&
                    <div style={{
                        backgroundColor: ((item.type === 'Clear') ? mode.clear.innerDiv : (item.type === 'Warning') ? 'white' : (item.type === 'Watch') ? mode.watch.innerDiv : mode.advisory.innerDiv),                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.type == 'Warning') ? 'black' : (item.type == 'Watch') ? mode.watch.textColor : mode.advisory.textColor),
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

export default InnerAreaStorms