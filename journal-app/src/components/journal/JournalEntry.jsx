export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif)',
        }}
      ></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Un nuevo dia</p>
        <p className='journal__entry-content'>
          "Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
