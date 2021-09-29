import { newWords } from "../data/words"
import { guessByPictureType } from "../types/exercises/types"
import { shuffle } from "../utils/utils"

export const prepareExercises = (req:any): guessByPictureType => {
    const dataFromLesson = newWords.filter(word => req.url.includes(word.lesson)).filter(w => w.title !== "وَ")
    const words = dataFromLesson.map(el => el.title)
    shuffle(words)
    const forPicQuizListRight = words.filter((word, index) => index < 3)
    let forPicQuizData: guessByPictureType = []
    for (let index = 0; index < forPicQuizListRight.length; index++) {
        let img = dataFromLesson.find(data => data.title === forPicQuizListRight[index])!.img
        let quiz = {
            img,
            variant:"",
            right: forPicQuizListRight[index]
        }
        forPicQuizData.push(quiz)
    }
    return forPicQuizData
}
