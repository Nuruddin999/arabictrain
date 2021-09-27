import React, { useEffect } from 'react'
import { guessByPictureType } from '../../types/exercises/types';
import { Box, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Clear';
import useMediaQuery from '@material-ui/core/useMediaQuery';
type guessByPictureProps = {
    pictures: guessByPictureType,
    runCheck: boolean
}
const quizByPictureStyles = makeStyles({
    imgContainer: {
        width: "100%"
    },
    radios: {
        '& span': { fontSize: "2em" }
    }
})
const GuessByPicture = ({ pictures, runCheck }: guessByPictureProps) => {
    const matches = useMediaQuery('(max-width:768px)');
    const styles = quizByPictureStyles()
    const [value, setValue] = React.useState({});
    console.log(runCheck)
    const handleChange = (index, event) => {
        setValue(value => ({ ...value, [index]: event.target.value }))
    };
    useEffect(() => {
        pictures.forEach((picture, index) => setValue(value => ({ ...value, [index]: "" })))
    }, [])
    return (
        <div>
            {pictures.map((el, index) => <Box display="flex" key={el.right} justifyContent="center" alignItems="center" p={!matches && 1}>
                <Box width={matches ? "30vw" : "10vw"} height={matches ? "30vw" : "10vw"}>
                    <img src={el.img} className={styles.imgContainer} />
                </Box>

                <Box display="flex" justifyContent="center" flexDirection="column" ml={2}>
                    <Box display="flex" className={styles.radios}>
                        <RadioGroup aria-label="gender" name="gender1" value={value[index] ? value[index] : ""}
                            onChange={(e) => handleChange(index, e)}>
                            {el.variants.map((variant, elindex) => <Box display="flex" >
                                {runCheck ? variant === el.right ? <CheckIcon color={"secondary"} /> : <CancelIcon color={"error"} /> : null}
                                <FormControlLabel key={variant} value={variant} control={<Radio />} label={variant} />
                            </Box>)}
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>)}

        </div>
    )
}

export default GuessByPicture
