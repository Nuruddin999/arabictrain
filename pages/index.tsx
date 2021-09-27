import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import HeaderComp from '../components/header_comp';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import LessonListenCard from '../components/lesson_listcard';
import { lessonsData } from '../data/constants';
const indexuseStyles = makeStyles({
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
  }
})
export default function Index() {

  const styles = indexuseStyles()
  return (
    <div>
      <Head>
        <title>Уроки арабского языка</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Арабский язык, он лайн уроки. Уроки арабского языка. Учить арабский язык легко. Учить арабский язык можно в он лайне" />
      </Head>
      <HeaderComp />
      <div className={styles.lessons}>
        <Typography align="center" variant="h5" className={styles.title}>Уроки</Typography>
      </div>
      <div className={styles.main}>
        {lessonsData.map(lesson => <LessonListenCard title={lesson.title} url={lesson.urltitle} />)}
      </div>


    </div>
  );
}
