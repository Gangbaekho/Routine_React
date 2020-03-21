
const addSummary = ({
    title = '',
    content = '',
    understanding = 1,
    folder = '',
    createdate = 0,
    updatedate = 0
} = {}
) => ({
    type: 'ADD_SUMMARY',
    summary: {
        title,
        content,
        understanding,
        folder,
        createdate,
        updatedate
    }
})

const updateSummary = ({
    id,
    title,
    content,
    understanding,
    folder
}) => ({
    type: 'UPDATE_SUMMARY',
    summary: {
        id,
        title,
        content,
        understanding,
        folder
    }
})

const removeSummary = (id) => ({
    type: 'REMOVE_SUMMARY',
    id
})

const addQuestion = ({
    title = '',
    content = ''
} = {}
) => ({
    type: 'ADD_QUESTION',
    question: {
        title,
        content
    }
})

const removeQuestion = (id) => ({
    type: 'REMOVE_QUESTION',
    id
})

const updateQuestion = ({
    id,
    title,
    content
}) => ({
    type: 'UPDATE_QUESTION',
    question: {
        id,
        title,
        content
    }
})

const addRelatedSummary = (summaryId, {
    id,
    title,
    content,
    understanding,
    folder,
    createdate,
    updatedate
}) => ({
    type: 'ADD_RELATED_SUMMARY',
    summaryId,
    addedSummary: {
        id,
        title,
        content,
        understanding,
        folder,
        createdate,
        updatedate
    }
})

const removeRelatedSummary = (summaryId, removedSummaryId) => ({
    type: 'REMOVE_RELATED_SUMMARY',
    summaryId,
    removedSummaryId
})

export {
    addSummary, updateSummary, removeSummary,
    addQuestion, updateQuestion, removeQuestion,
    addRelatedSummary, removeRelatedSummary
}
