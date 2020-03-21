const summaryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUMMARY':
            return [
                ...state,
                action.summary
            ]
    }
}

export default summaryReducer