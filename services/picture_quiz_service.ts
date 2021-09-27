import { newWords } from "../data/words"
import { guessByPictureType } from "../types/exercises/types"
import { shuffle } from "../utils/utils"

export const prepareQuiz = (req, shuffleNumber: number): guessByPictureType => {
    const dataFromLesson = newWords.filter(word => req.url.includes(word.lesson)).filter(w => w.title !== "وَ")
    const words = dataFromLesson.map(el => el.title)
    shuffle(words)
    const forPicQuizListRight = words.filter((word, index) => index < 3)
    let forPicQuizData: guessByPictureType = []
    for (let index = 0; index < forPicQuizListRight.length; index++) {
        let variants = [forPicQuizListRight[index]]
        let img = dataFromLesson.find(data => data.title === forPicQuizListRight[index])!.img
        let withoutRight = words.filter(el => el !== forPicQuizListRight[index])
        while(variants.length<3){
            let variant=withoutRight[Math.floor(Math.random()*withoutRight.length)+1]
            if(variants.indexOf(variant)===-1){
                variants.push(variant)
            }
        }
        shuffle(variants)
        let quiz = {
            img,
            variants,
            right: forPicQuizListRight[index]
        }
        forPicQuizData.push(quiz)
    }
    return forPicQuizData
}