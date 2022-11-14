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
        } else {
            return (
                <div className="timer">
                    00:00
                </div>
            )
        }
    };

    export default CountdownTimer