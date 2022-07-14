import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

import {
  db,
  collection,
  addDoc,
} from '../firebase/firebaseConfig';
import { fileUpload } from '../helpers/fileUpload';
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
    dispatch(addNewNote(doc.id, newNote));
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

export const addNewNote = (id, note) => {
  return {
    type: types.notesAddNew,
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

    // dispatch(startLoadingNotes(uid));

    dispatch(refreshNote(note.id, noteToFirestore));

    Swal.fire('Saved', note.title, 'success');
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdated,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};

export const startUploadingFile = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    // console.log(activeNote);

    // const note = Object.assign({}, activeNote);

    // console.log(note === activeNote);

    // Swal.fire({
    //   title: 'Uploading...',
    //   text: 'Please Wait...',
    //   allowOutsideClick: false,
    //   onBeforeOpen: () => {
    //     Swal.showLoading();
    //   },
    // });

    const fileUrl = await fileUpload(file);

    console.log('original', fileUrl);

    const fileUrlCopy = Object.assign({}, fileUrl);

    console.log('copy', fileUrlCopy);

    console.log(fileUrl === fileUrlCopy);

    activeNote.url = fileUrlCopy.secure_url;

    console.log(activeNote);

    // TODO: find whats the problem with the dispatch

    // console.log(activeNote);

    // dispatch(startSaveNote(activeNote));

    // Swal.close();
  };
};

export const startDeletingNote = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));

    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => {
  return {
    type: types.notesDelete,
    payload: id,
  };
};

export const notesLogout = () => {
  return {
    type: types.notesLogoutCleaning,
  };
};
