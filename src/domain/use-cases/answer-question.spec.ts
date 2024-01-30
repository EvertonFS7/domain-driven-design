import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepsoitory: AnswersRepository = {
    create: async (answer: Answer) => {
        return
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepsoitory)

    const aswer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova resposta'
    })

    expect(aswer.content).toEqual('Nova resposta')
})