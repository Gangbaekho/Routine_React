import axios from 'axios'

const summaryReducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_SUMMARIES':
            return action.summaries
        case 'ADD_SUMMARY':
            return [
                ...state,
                action.summary
            ]
        case 'UPDATE_SUMMARY': {

            const indexForUpdate = state.findIndex((item) => item.id === action.summary.id)
            state[indexForUpdate] = action.summary

            return state

        }

        case 'REMOVE_SUMMARY':
            return state.filter((item) => item.id !== action.id)

        case 'ADD_QUESTION': {

            const indexForUpdate = state.findIndex((item) => item.id === action.summaryId)
            state[indexForUpdate].questions.push(action.question)

            return state
        }

        case 'REMOVE_QUESTION': {

            const indexSummaryForRemoveQuestion = state.findIndex((summary) => summary.id === action.summaryId)

            const targetSummary = state.find((summary) => summary.id === action.summaryId)

            const filteredQuestions = targetSummary.questions.filter((question) => question.id !== action.id)

            const newSummary = {
                ...targetSummary,
                questions: filteredQuestions
            }

            const filteredState = state.filter((summary) => summary.id !== action.summary)
            filteredState.splice(indexSummaryForRemoveQuestion, 1, newSummary)

            return filteredState



        }

        case 'UPDATE_QUESTION': {

            const summaryIndexForUpdateQuestion = state.findIndex((item) => item.id === action.summaryId)
            const QuestionIndexForUpdate = state[summaryIndexForUpdateQuestion].questions.findIdex((item) => item.id === action.id)

            state[summaryIndexForUpdateQuestion].questions[QuestionIndexForUpdate] = action.question


        }


    }
}

export default summaryReducer