import React, { useContext } from 'react'
import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AppContext } from '../../context/AppContext'



const MobileInnerStormConditions = ({ item }) => {


    const {mode} = useContext(AppContext)
    let border = (item.type == 'Clear' ? mode.clear.border : (item.type == 'Warning') ? mode.warning.border : (item.type == 'Watch') ? mode.watch.border : mode.advisory.border)
    return (
        <div style={{
            display: 'flex',
            marginBottom: '5px',
            lineHeight: '100%'

        }}>
            <div style={{

                width: '30%',
                margin: '0',

                fontSize: '58%',
                verticalAlign: 'middle',

                color: (item.type == 'Clear' ? mode.clear.locationColor : (item.type == 'Warning') ? mode.warning.locationColor : (item.type == 'Watch') ? mode.watch.locationColor : mode.advisory.locationColor),
                fontWeight: 'bold',
                marginLeft: '10px',

            }}>

                Expected Hail Size: {((item.type == 'Clear') ? 'Clear' : (item.type == 'Watch') ? 'Watch' : (item.type == 'Warning') ? `${item.hail_diameter} in` : 'Clear')}
                <div style={{
                    color: (item.type == 'Clear' ? mode.clear.locationColor : (item.type == 'Warning') ? mode.warning.locationColor : (item.type == 'Watch') ? mode.watch.locationColor : mode.advisory.locationColor),

                }}>Expected Winds: {((item.type == 'Clear') ? 'Clear' : (item.type == 'Watch') ? 'Watch' : (item.type == 'Warning') ? `${item.wind_speed} KT` : 'Clear')}
                </div>
            </div>

            <div style={{

                width: '64%',
                margin: '0 auto',
                marginRight: '5px',
                marginBottom: '25px',
                backgroundColor: ((item.type === 'Clear') ? mode.clear.innerDiv : (item.type === 'Warning') ? mode.warning.innerDiv : (item.type === 'Watch') ? mode.watch.innerDiv : mode.advisory.innerDiv),
                border: `2px solid ${border}`,
                borderRadius: '25px',
                textAlign: 'left',
                paddingLeft: '0px',
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
                       {item.type === 'Clear' && <BsCheckCircle style={{ color: mode.clear.iconColor, height: '100%', width: 'auto' }} />}
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
                        fontSize: '70%',
                    }}>
                        {item.type}
                    </div>
                </div>
                <div style={{
                    width: 'auto',

                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        fontSize: '70%',
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.type == 'Warning') ? mode.warning.textColor : (item.type == 'Watch') ? mode.watch.textColor : mode.advisory.textColor)
                    }}>
                        {item.start.slice(11, 16)}
                    </div>
                </div>
                <div style={{
                    width: 'auto',
                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        fontSize: '70%',
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.type == 'Warning') ? mode.warning.textColor : (item.type == 'Watch') ? mode.watch.textColor : mode.advisory.textColor)
                    }}>
                        {item.end.slice(11, 16)}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MobileInnerStormConditions