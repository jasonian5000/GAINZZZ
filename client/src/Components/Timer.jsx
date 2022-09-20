import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../css/timer.css'

const Timer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function toggle() {
        setIsActive(!isActive)
    }

    function reset() {
        setSeconds(0)
        setMinutes(0)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
            if (seconds === 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, minutes, seconds])

    return (
        <div className="app">
            <div className="time">
                {minutes < 10 ? '0' + minutes : minutes}m:
                {seconds < 10 ? '0' + seconds : seconds}s
            </div>
            <div className="row">
                <button
                    className={`button button-primary button-primary-${
                        isActive ? 'active' : 'inactive'
                    }`}
                    onClick={toggle}
                >
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}
export default Timer




