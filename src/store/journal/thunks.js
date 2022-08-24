import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        addNewEmptyNote: () => {

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
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;