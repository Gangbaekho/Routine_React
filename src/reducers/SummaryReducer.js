const summaryReducer = (state = [], action) => {

    switch (action.type) {
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

            const summaryIndexForRemoveQuestion = state.findIndex((item) => item.id === action.summaryId)
            const QuestionIndexForRemove = state[summaryIndexForRemoveQuestion].questions.findIdex((item) => item.id === action.id)

            state[summaryIndexForRemoveQuestion].questions.splice(QuestionIndexForRemove, 1)

            return state

        }

        case 'UPDATE_QUESTION': {

            const summaryIndexForUpdateQuestion = state.findIndex((item) => item.id === action.summaryId)
            const QuestionIndexForUpdate = state[summaryIndexForUpdateQuestion].questions.findIdex((item) => item.id === action.id)

            state[summaryIndexForUpdateQuestion].questions[QuestionIndexForUpdate] = action.question


        }


    }
}

export default summaryReducer