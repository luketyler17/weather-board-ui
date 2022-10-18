
import { Card, Grid, Paper, FormGroup, FormControlLabel } from "@mui/material"
const StormLocation = ({ location, setStormLocationChecked, stormLocationChecked }) => {

    const handleCheck = (e) => {
        if (stormLocationChecked.includes(e.target.value)) {
            setStormLocationChecked([])
        } else {
            setStormLocationChecked(e.target.value)
        }
    }

    return (
        <>
            <>
                <div style={{
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>

                    <label style={{width:'25%'}}>
                        <input type="checkbox" style={{
                            margin: '15px',
                        }} value={"CCSFS"}
                            onChange={(e) => handleCheck(e)}
                            disabled={stormLocationChecked.includes("KSC") == true || stormLocationChecked.includes("PSFB") == true}

                        />
                        <span style={{
                        }}>{location[0]}</span>
                    </label>
                    <label style={{width:'25%'}}>
                        <input type="checkbox" style={{
                            margin: '15px',
                        }} value={"KSC"}
                            disabled={stormLocationChecked.includes("CCSFS") == true || stormLocationChecked.includes("PSFB") == true}
                            onChange={(e) => handleCheck(e)}
                        />
                        <span style={{
                        }}>{location[1]}</span>
                    </label>
                    <label style={{width:'27%'}}>
                        <input type="checkbox" style={{
                            margin: '15px',
                        }} value={"PSFB"}
                            onChange={(e) => handleCheck(e)}
                            disabled={stormLocationChecked.includes("CCSFS") == true || stormLocationChecked.includes("KSC") == true}
                        />

                        <span style={{
                        }}>{location[2]}</span>
                    </label>
                </div>



            </>
        </>
    )

}

export default StormLocation