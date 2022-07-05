import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
        />
        <textarea
          placeholder='What happened today?'
          className='notes__textarea'
        ></textarea>

        <div className='notes__image'>
          <img
            src='https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif'
            alt='image'
          />
        </div>
      </div>
    </div>
  );
};
