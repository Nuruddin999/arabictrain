export type wordsType = { title: string, translation: string, img: string, lesson: string, audio: string }[]
export type textWordType = { arab: string, rus: string }[]
export type lessonTextType = { lesson: string, text: textWordType[] }
export type lessonType = {
    title: string,
    metatitle: string,
    metadescr: string,
    words: wordsType,
    text: textWordType[],
}