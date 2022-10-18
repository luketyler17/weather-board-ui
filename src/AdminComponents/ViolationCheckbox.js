import React from "react";
import { useState } from "react";

const ViolationCheckbox = ({ label, setViolationValues, violationValues }) => {

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        if (checked == true) {
            setViolationValues(undefined)
            setChecked(false)
        }
        if (checked == false) {
            if (violationValues == undefined) {
                setViolationValues([label])
                setChecked(true)
            } else {
                setViolationValues([...violationValues, label])
                setChecked(true)
            }
        }
    }
    return (
        <>
            {
                (violationValues == undefined) ?
                    (<div>
                        <label>
                            <input onChange={handleChange} type="checkbox" style={{
                            margin: '15px',
                        }} />
                            <span>{label}</span>
                        </label>
                    </div>
                    ) : (violationValues[0] != label ? (
                        <div>
                            <label>
                                <input onChange={handleChange} type="checkbox" style={{
                            margin: '15px',
                        }} disabled />
                                <span>{label}</span>
                            </label>
                        </div>
                    ) : (
                        <div>
                            <label>
                                <input onChange={handleChange} type="checkbox" style={{
                            margin: '15px',
                        }} />
                                <span>{label}</span>
                            </label>
                        </div>))
            }
        </>
    )
}

export default ViolationCheckbox