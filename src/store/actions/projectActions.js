export const createProject = (project) => {
    return async (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        await firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Frankline',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => dispatch({
            type: 'CREATE_PROJECT', project
        })).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        });
    }
}