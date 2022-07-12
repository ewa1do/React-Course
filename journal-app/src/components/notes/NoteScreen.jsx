import { useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange] = useForm(note);

  const { body, title } = formValues;

  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today?'
          className='notes__textarea'
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className='notes__image'>
            <img
              src='https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif'
              alt='image'
            />
          </div>
        )}
      </div>
    </div>
  );
};
