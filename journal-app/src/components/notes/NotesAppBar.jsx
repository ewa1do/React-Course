import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSavingNoteOnClick = () => {
    dispatch(startSaveNote(active));
  };

  return (
    <div className='notes__appbar'>
      <span>August 28 2020</span>

      <div>
        <button className='btn'>Picture</button>
        <button
          className='btn'
          onClick={handleSavingNoteOnClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};
