import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Cookies from 'universal-cookie';

const cookie= new Cookies()

const CountdownTimer = ({ item }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const { toggle, setToggle } = useContext(AppContext);
    let user = cookie.get('authentication', { path: '/' })
    const url = 'https://weatherwarn.herokuapp.com/'

    const getTime = (input) => {
        const time = new Date(item.end) - new Date();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
        const interval = setInterval(() => getTime(item), 1000);

        return () => clearInterval(interval);
    }, [toggle]);

    if (isNaN(hours) !== true && isNaN(minutes) !== true && isNaN(seconds) !== true && (seconds >= 0 && hours >= 0 && minutes >= 0)) {
        return (
            <div className="timer">
                {hours < 10 ? (`0${hours}`) : hours}:{minutes < 10 ? (`0${minutes}`) : minutes}:{seconds < 10 ? (`0${seconds}`) : seconds}
            </div>
        );
        // } else if (new Date(item.end)< new Date() ) {
    //     // if prop has hail size === Severe Storm
    //     if (item.hasOwnProperty(item.hail_diameter)) {
    //         fetch(`${url}/storm`, {
    //             method: 'PATCH',
    //             mode: 'no-cors',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 is_active: true,
    //                 type: "Clear",
    //                 location: item.location,
    //                 wind_speed: 0,
    //                 wind_direction: 0,
    //                 hail_diameter: 0,
    //                 start: '1900-01-01 00:00:01',
    //                 end: '1900-01-01 00:00:01',
    //                 user: user.user_name
    //             })
    //         })
    //     } else if (!item.hasOwnProperty(item.wind_speed) && !item.hasOwnProperty(item.hail_diameter)) {
    //         fetch(`${url}/lightning`, {
    //             method: 'PATCH',
    //             mode: 'no-cors',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 is_active: true,
    //                 type: 'Clear',
    //                 location: item.location,
    //                 category: 'N/A',
    //                 start: '1900-01-01 00:00:01',
    //                 end: '1900-01-01 00:00:01',
    //                 user_name: user.user_name,
    //             })

    //         })}
    //         // if prop has no hail size but has wind speed === wind
    //         // else it is lightning
        } else {
            return (
                <div className="timer">
                    00:00
                </div>
            )
        }
    };

    export default CountdownTimer