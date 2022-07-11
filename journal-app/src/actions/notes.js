import {
  db,
  collection,
  addDoc,
} from '../firebase/firebaseConfig';
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

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};
