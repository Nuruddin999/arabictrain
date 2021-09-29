import React, { useState, useEffect } from 'react'
import GuessByPicture from '../../../components/exercises/guess_by_picture';
import Button from '@material-ui/core/Button';
import { prepareExercises} from '../../../services/picture_quiz_service';
import axios from 'axios';
const VklasseTasks = ({ pictureQuiz }) => {
    const [state, setState] = useState({
        pictures: [],
        turnOnCkeck: false
    })
    const handleCheck = () => {
        setState(state => ({ ...state, turnOnCkeck: true }))
    }
    const refresh = async () => {
        let response = await axios.get("/api/vklassepicquiz")
        setState(state => ({ ...state, pictureQuiz: response.data }))
    }
    useEffect(() => {
        setState(state => ({ ...state, pictures:pictureQuiz }))
    }, [])
    return (
        <div>
            <GuessByPicture pictures={state.pictures} runCheck={state.turnOnCkeck} />
            <Button onClick={handleCheck}>Проверить</Button>
            <Button onClick={refresh}>Заново</Button>
        </div>
    )
}

export default VklasseTasks
export async function getServerSideProps({ req }: any) {
    let forPicQuizData = prepareExercises(req)
    return {
        props: {
            pictureQuiz: forPicQuizData,
        }
    }
}
