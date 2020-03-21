
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

const addQuestion = (summaryId, {
    title = '',
    content = ''
} = {}
) => ({
    type: 'ADD_QUESTION',
    summaryId,
    question: {
        title,
        content
    }
})

const removeQuestion = (summaryId, id) => ({
    type: 'REMOVE_QUESTION',
    summaryId,
    id
})

const updateQuestion = (summaryId, {
    id,
    title,
    content
}) => ({
    type: 'UPDATE_QUESTION',
    summaryId,
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