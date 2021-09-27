import { prepareQuiz } from './../../services/picture_quiz_service';
export default function handler(req, res) {
    let data = prepareQuiz(req)
    res.status(200).json(data)
}