import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { lessonType } from '../../../types/types';
import HeaderComp from '../../../components/header_comp';
import { lessonsData } from '../../../data/constants';
import { Typography } from '@material-ui/core';
import { newWords } from '../../../data/words';
import WordsComp from '../../../components/words_comp';
import TextComp from '../../../components/text_comp';
import { texts } from '../../../data/texts';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const vklasseStyles = makeStyles({
  mainLesson: {
    background: "#fff",
    height: "100%",
    paddingBottom: "1em"
  },
  main: {
    maxWidth: "1440px",
    margin: "1em auto 0"
  },
  lessons: {
    background: "white",
    padding: "1.5em",
    boxShadow: "0.1px 1px 4px 0 #e7eeef",
  },
  title: {
    fontWeight: 800,
    letterSpacing: "1px"
  },
  paper: props => ({
    width: props.mobile ? "20%" : "8%",
    margin: "1em auto 0", textAlign: "center",
    '& img': {
      width: "100%", margin: "auto", padding: "1em",
      background: "#e7eeef",
      borderRadius: "30%",
      boxShadow: "0.1px 1px 4px 0 #000000",
      cursor: "pointer"
    },
    '& span': {
      width: "100%",
    }
  }),
  btn: {
    fontSize: "14px",
    width: "100%",
    boxShadow: "0.1px 1px 4px 0 #e7eeef",
  }
})
const VklasseLesson = ({ title, metatitle, metadescr, words, text }: lessonType) => {
  const matches = useMediaQuery('(max-width:768px)');
  const props = { mobile: matches };
  const styles = vklasseStyles(props)
  return (
    <div className={styles.mainLesson}>
      <Head>
        <title>{metatitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metadescr} />
      </Head>
      <HeaderComp />
      <div className={styles.lessons}>
        <Typography align="center" variant="h6" className={styles.title}>{title}</Typography>
      </div>
      <div className={styles.main}>
        <WordsComp newwords={words} />
        <TextComp phrases={text} />

        <a href="/arabski/uprazneniya/vklasse">
          <div className={styles.paper}>
            <img src={"/img/exercise.svg"} />
          </div>
        </a>
        <Typography variant="subtitle2" align="center" color={"primary"}>Упражнения</Typography>
        {/* <Button className={styles.btn} href={`/arabski/uprazneniya/vklasse`}>
            <Box display="flex" flexDirection="column">
              <Box width="100%">
             
              </Box>
              <Box>
                <Typography variant="subtitle">Упражнения</Typography>
              </Box>
            </Box>
          </Button> */}





        {/* <Button className={styles.btn} href={`/arabski/uprazneniya/vklasse`}>
          <Typography variant="subtitle">Упражнения</Typography>
        </Button> */}
      </div>
    </div>
  );
}
export default VklasseLesson
export async function getServerSideProps({ req }: any) {
  let lsn = lessonsData.find(lesson => req.url.includes(lesson.urltitle))
  const words = newWords.filter(words => req.url.includes(words.lesson))
  const text = texts.find(text => req.url.includes(text.lesson))
  return {
    props: {
      title: lsn?.title,
      metatitle: lsn?.metatitle,
      metadescr: lsn?.metadescr,
      words: words,
      text: text?.text
    }
  }
}