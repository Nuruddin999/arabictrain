import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    headerWrapper: {
        background: "#39424e",
        color: "white",
        padding: ".5em",
    },
    logoTitle: {
        fontWeight: 800,
        letterSpacing: "1px",
        fontSize: "1.5em"
    },
    navmenu: {
        width: "80%",
        margin: "0 auto 0",
        display: "flex",
        justifyContent: "start",
    }
})
const HeaderComp = () => {
    const styles = useStyles();
    return (
        <header>
            <nav className={styles.headerWrapper}>
                <div className={styles.navmenu}>
                    <Typography className={styles.logoTitle}>Arabic train</Typography>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComp
