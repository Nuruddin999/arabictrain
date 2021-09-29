import React, {useEffect} from 'react'
import {guessByPictureType} from '../../types/exercises/types';
import {Box, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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
        '& span': {fontSize: "2em"}
    }
})
const GuessByPicture = ({pictures, runCheck}: guessByPictureProps) => {
    const matches = useMediaQuery('(max-width:768px)');
    const styles = quizByPictureStyles()
    const [value, setValue] = React.useState([]);
    const handleChange = (index: number, event: any) => {
        let list=value.map((el,elindex)=>elindex===index ? ({...el,value:event.target.value}):el)
        setValue(list)
    };
    useEffect(() => {
       setValue(pictures)
    }, [pictures])
    return (
        <div>
            <Typography align={"center"} variant={"h4"}>Напиши что изображено на картинке</Typography>
            <Box display={"flex"} justifyContent={"center"} mt={4}>
                {pictures.map((el, index) => <Box display="flex" key={el.right} justifyContent="center"
                                                  flexDirection="column" alignItems="center" p={!matches && 1}>
                    <Box width={matches ? "30vw" : "10vw"} height={matches ? "30vw" : "10vw"}>
                        <img src={el.img} className={styles.imgContainer}/>
                    </Box>

                    <Box display="flex" justifyContent="center" flexDirection="column" ml={2}>
                        <TextField variant={"outlined"}  onChange={(e) => handleChange(index, e)}/>
                    </Box>
                </Box>)}
            </Box>


        </div>
    )
}

export default GuessByPicture
