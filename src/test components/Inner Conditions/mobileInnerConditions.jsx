import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AppContext } from '../../context/AppContext'
import React, { useContext } from 'react'
const MobileInnerConditions = ({ item, location }) => {

    const { protanopia, deutanopia, tritanopia} = useContext(AppContext)
    let border = (item.type == 'Clear' ? '#035600' : (item.category == 'Warning') ? '#C90000' : (item.category == 'Watch') ? '#D68E24' : '#B800F9')
    return (
        <>
        
        <div style={{
            display: 'flex',
            marginBottom: '5px',
            lineHeight: '100%'

        }}>
  <div style={{
                width: '30%',
                margin: '1px',
                
                verticalAlign: 'middle',
                color: (item.type == 'Clear' ? '#03AD00' : (item.category == 'Warning') ? '#C90000' : (item.category == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)'),
                fontWeight: 'bold',
                fontSize:'70%'

            }}>
                {location} <div style={{
                    fontStyle: 'italic',
                    color: '#747474'
                }}>{item.category}</div>
            </div>
            <div style={{
                width: '63%',
                margin: '0 auto',
                marginRight: '5px',
                marginBottom: '5px',
                backgroundColor: (
                    (protanopia === true) ? (item.type == 'Clear' ? '#efecf4' : (item.category == 'Warning') ? '#968726' : (item.category == 'Watch') ? '#ffea86' : '#b9c5fa'):
                    (deutanopia === true) ? (item.type == 'Clear' ? '#ffeafd' : (item.category == 'Warning') ? '#a98200' : (item.category == 'Watch') ? '#ffd79d' : '#8fbefc'):
                    (tritanopia === true) ? (item.type == 'Clear' ? '#d6f4f8' : (item.category == 'Warning') ? '#fe1c00' : (item.category == 'Watch') ? '#fdcbe9' : '#bb8791'):
                    (item.type == 'Clear' ? '#F8FFF8' : (item.category == 'Warning') ? '#C90000' : (item.category == 'Watch') ? '#FFFF97' : '#F2DCFA')
                ),
                border: `2px solid ${border}`,
                color:(item.type == 'Clear' ? '#035600' : (item.category == 'Warning') ? '#C90000' : (item.category == 'Watch') ? '#D68E24' : '#B800F9'),
                fontFamily:'Kanit',
                borderRadius: '25px',
                textAlign: 'left',
                paddingLeft: '5px',
                filter: 'drop-shadow(0 2px 0.2rem black',
                display: 'flex',
                justifyContent: 'space-evenly',
                height: '15%',
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
                        {item.category === 'Watch' && <BsExclamationCircle style={{ color: '#D68E24', height: '100%', width: '100%' }} />}
                        {item.category === 'Warning' && <HiOutlineXCircle style={{ color: 'white', height: '100%', width: '100%' }} />}
                        {item.category === 'Advisory' && <AiOutlineQuestionCircle style={{ color: 'rgba(223, 0, 254)', height: '100%', width: '100%' }} />}
                    </div>
                </div>
                <div style={{
                    width: '20%',
                    color: (item.type == 'Clear' ? '#03AD00' : (item.category == 'Warning') ? 'white' : (item.category == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        fontSize:'70%'
                    }}>
                        &nbsp;{item.type==='Clear'? 'Clear':item.category}
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
                        color: (item.type == 'Clear' ? '#03AD00' : (item.category == 'Warning') ? 'white' : (item.category == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
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
                        color: (item.type == 'Clear' ? '#03AD00' : (item.category == 'Warning') ? 'white' : (item.category == 'Watch') ? '#D68E24' : 'rgba(223, 0, 254)')
                    }}>
                        {item.type == 'Clear' ? '00:00' : (item.category == 'Warning' ? "INDEF" : item.category == 'Watch' ? item.end.slice(11, 16) : "00:00")}
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default MobileInnerConditions
