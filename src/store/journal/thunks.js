import { collection, addDoc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote } from './journalSlice';

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());
        // console.log(getState());
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = await addDoc( collection( FirebaseDB, `${ uid }/journal/notes`), newNote);
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
    }
}