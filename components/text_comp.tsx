import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { lessonTextType } from '../types/types';
import theme from "../src/theme"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
let arabic = {
    fontSize: "1.5em",
    padding: "0 .3em",
    textAlign: "center",
    cursor: "pointer",
}
const textCompStyle = makeStyles({
    textContainer: props => ({
        display: "flex",
        width: props.mobile ? "100%" : "50%",
        margin: props.mobile ? ".5em .1em  0" : "2em auto 0",
        flexDirection: "column",
        padding: ".5em",
        borderRadius: "10px",
        background: "#f5f2f0",
        wordBreak: "break-all"
    }),
    wordsRow: props => ({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        fontSize: props.mobile ? "1.4em" : "2em",
        padding: ".3em",
        alignItems: "center"
    }),
    subtitle: {
        marginTop: "1em"
    },
    arab: {
        ...arabic,
    },
    arabHover: {
        ...arabic,
        background: "rgba(0, 0, 0, 0.04)",
        border: "1px solid  rgba(27, 169, 76, 0.5);",
    },
    rus: {
        padding: "0 1em",
        textAlign: "center"
    }
})
type textProps = {
    phrases: lessonTextType[];
};
const TextComp = ({ phrases }: textProps) => {
    const [state, setState] = useState({ row: null, column: null,word:"" })
    const matches = useMediaQuery('(max-width:768px)');
    const props = { mobile: matches };
    console.log(phrases)
    const styles = textCompStyle(props)
    const handleHover = (row, column,word) => {
        setState(state => ({ ...state, row, column,word }))
    }
    const handleOut = () => {
        setState(state => ({ ...state, row: null, column: null,word:"" }))
    }
    // let wordsArab = phrases.map(phrase => phrase.title.split(" "))
    // let wordsRus = phrases.map(phrase => phrase.translation.split(" "))
    return (
        <div>
            <Typography variant="h5" align="center" className={styles.subtitle} color={"primary"}>Текст</Typography>
            {matches && <Box width="90%" mx="auto" bgcolor={theme.palette.warning.light} display="flex" borderRadius="10px" mt={1}>
           <Box p={1}> <EmojiObjectsIcon /> </Box>
             <Box p={1} m={1}>  <Typography>Кликните на арабское слово и увидите перевод</Typography> </Box>
            </Box>}
            {phrases.map((sentence,sIndex) =><Box display="flex" flexDirection="column">
           <Box className={styles.wordsRow} dir="rtl">{sentence.map((word,index) => <span className={state.row === index && state.column === sIndex ? styles.arabHover : styles.arab}  onMouseOver={() => handleHover(index, sIndex,word.rus)} onMouseOut={handleOut} onTouchStart={() => handleHover(index, sIndex,word.rus)}>
           {word.arab}
           </span>)}
            </Box>
              <Box display="flex" justifyContent="center">{sentence.map((word,index) => <span className={state.row === index && state.column === sIndex && word.rus===state.word ? styles.arabHover : styles.arab}>{word.rus}</span>)}
            </Box>
            
            </Box>)}
            {/* {phrases.map(phrase => <Box display="flex" justifyContent="center" flexDirection="column" fontSize={matches ? "1.4em" : "2em"}><span className={styles.arab}>{phrase.title}</span><span className={styles.rus}>{phrase.translation}</span></Box>)} */}
            {/* {wordsArab.map((word, index) => <Box>
                <Box key={"wordblok" + index} display="flex" justifyContent="center" flexDirection="row" fontSize={matches ? "1.4em" : "2em"}>
                    {word.reverse().map((w, windex) => <span key={w + index} className={state.row === index && state.column === windex ? styles.arabHover : styles.arab} onMouseOver={() => handleHover(index, windex)} onMouseOut={handleOut}>{w}</span>)}
                </Box>
                <Box key={"wordblok" + index} display="flex" justifyContent="center" flexDirection="row" fontSize={matches ? "1.4em" : "2em"}>
                    {wordsRus[index].map((w, windex) => <span key={w + index} className={state.row === index && state.column === windex ? styles.arabHover : styles.arab}>{w}</span>)}
                </Box>
            </Box>
            )} */}
        </div>
    )
}

export default TextComp
