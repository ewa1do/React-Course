import { useDispatch, useSelector } from 'react-redux';
import {
  startSaveNote,
  startUploadingFile,
} from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSavingNoteOnClick = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureUpload = () => {
    document.getElementById('fileSelector').click();
  };

  const handleFileChange = ({ target }) => {
    const file = target.files[0];

    if (file) {
      dispatch(startUploadingFile(file));
    }
  };

  return (
    <div className='notes__appbar'>
      <span>August 28 2020</span>

      <input
        id='fileSelector'
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div>
        <button
          className='btn'
          onClick={handlePictureUpload}
        >
          Picture
        </button>
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
