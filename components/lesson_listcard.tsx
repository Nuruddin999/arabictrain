import { Box, Button, Card, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const lessonCardStyles = makeStyles({
    card: props => ({
        width: props.mobile ? "80%" : "20%",
        padding: props.mobile ? "1em" : "2em",
        margin: props.mobile && "2px auto 0",
        marginTop: !props.mobile && "1em",
    }),
    content: {
        display: "flex",
        flexDirection: "column"
    },
    btn: props => ({
        width: props.mobile ? "80%" : "30%",
        marginTop: "1em",
        margin: props.mobile && "0 auto 0",
    })
})
type CardProps = {
    title: string,
    url: string
}
const LessonListenCard = ({ title, url }: CardProps) => {
    const matches = useMediaQuery('(max-width:768px)');
    const props = { mobile: matches };
    const styles = lessonCardStyles(props)
    return (
        <Card className={styles.card}>
            <Box className={styles.content}>
                <Typography variant={matches ? "h6" : "h4"} color={"primary"}>
                    {title}
                </Typography>
                <div className={styles.btn}>
                    <Button variant="outlined" color="secondary" href={`/arabski/uroki/${url}`} fullWidth={matches}>
                        Начать
                    </Button>
                </div>

            </Box>
        </Card>
    )
}

export default LessonListenCard
