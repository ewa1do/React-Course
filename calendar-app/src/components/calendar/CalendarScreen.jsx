import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpes/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

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
    user: {
      _id: 123,
      name: 'Ezio',
    },
  },
];

const eventStyleGetter = (event, start, end, isSelected) => {
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
  const [lastView, setLastView] = useState(
    localStorage.getItem('last-view') || 'month'
  );

  const onDoubleClick = (e) => {
    console.log(e);
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('last-view', e);
  };

  return (
    <div className='calendar-screen'>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        messages={messages}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventStyleGetter}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
    </div>
  );
};
