import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: () => {

        },
        setNotes: () => {

        },
        setSaving: () => {

        },
        updateNote: () => {

        },
        deleteNoteById: () => {

        },
    }
});
// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote, 
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
} = journalSlice.actions;