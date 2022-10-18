import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
const CountdownTimer = ({ item }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const { toggle, setToggle} = useContext(AppContext);

    const deadline = "December, 31, 2022";

    const getTime = () => {
        const time = new Date(item.end) - new Date();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, [toggle]);

    if (isNaN(hours) !== true && hours >= 0 && isNaN(minutes) !== true && minutes >= 0 && isNaN(seconds) !== true && seconds >= 0) {
        return (
            <div className="timer">
                {hours}:{minutes}:{seconds}
            </div>
        );
    } else {
        return (
            <div className="timer">
                00:00:00
            </div>
        )
    }
};

export default CountdownTimer;