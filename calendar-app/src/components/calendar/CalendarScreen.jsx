import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpes/calendar-messages';

import 'moment/locale/es';
import './calendar.scss';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Boss birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
  },
];

const eventStyleGetter = (event, start, end, isSelected) => {
  console.log(event, start, end, isSelected);

  const style = {
    backgroundColor: '#367CF7',
    borderRadius: '0px',
    opacity: 0.8,
    display: 'block',
    color: '#fff',
  };

  return {
    style,
  };
};

export const CalendarScreen = () => {
  return (
    <div className='calendar-screen'>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        messages={messages}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};
