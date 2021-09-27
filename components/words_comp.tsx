import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Container } from '@material-ui/core';
import { wordsType } from '../types/types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const wordsCompStyle = makeStyles({
    wordsContainer: props => ({
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
        flexWrap:"wrap",
        justifyContent:"space-around",
        flexDirection: props.mobile && "column",
        fontSize: props.mobile ? "1.4em" : "2em",
        borderBottom: "1px solid black",
        padding: ".3em",
        alignItems: "center"
    }),
    subtitle: {
        marginTop: "1em"
    },
    arab: {
        fontSize: "1.5em",
        padding:"0 1em"
    },
    rus:{
          padding:"0 1em"
    }
})
type WordProps = {
    newwords: wordsType;
};
const WordsComp = ({ newwords }: WordProps) => {
    const matches = useMediaQuery('(max-width:768px)');
    const props = { mobile: matches };
    const styles = wordsCompStyle(props)
    return (
        <div>
            <Typography variant="h6" align="center" className={styles.subtitle} color={"primary"}>Новые слова</Typography>
            <Container>
            <code className={styles.wordsContainer}>
                {newwords.map(newWord => <div className={styles.wordsRow} key={newWord.title}>
                    <span className={styles.arab}>{newWord.title}</span><span className={styles.rus}>{newWord.translation}</span>
                </div>)}
            </code></Container>
        
        </div>
    )
}

export default WordsComp
