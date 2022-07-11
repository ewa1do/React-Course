import { db, collection } from '../firebase/firebaseConfig';
import { getDocs } from 'firebase/firestore';

export const loadNotes = async (uid) => {
  const notesSnapshot = await getDocs(
    collection(db, `${uid}/journal/notes`)
  );

  const notes = [];

  notesSnapshot.forEach((snap) => {
    // console.log(snap.data());
    notes.push({
      id: snap.id,
      ...snap.data(),
    });
  });
  console.log(notes);

  return notes;
};
