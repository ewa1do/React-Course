import { doc, updateDoc } from 'firebase/firestore';
import {
  db,
  collection,
  addDoc,
} from '../firebase/firebaseConfig';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const doc = await addDoc(
      collection(db, `${uid}/journal/notes`),
      newNote
    );

    // console.log(doc);

    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) delete note.url;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(db, `${uid}/journal/notes/${note.id}`);

    await updateDoc(docRef, noteToFirestore);
  };
};
