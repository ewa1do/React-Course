import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import { messages } from '../../helpes/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';
import {
  eventClearActiveEvent,
  eventSetActive,
  eventStartLoading,
} from '../../actions/events';

import 'moment/locale/es';
import './calendar.scss';

moment.locale('es');

const localizer = momentLocalizer(moment);

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
  const dispatch = useDispatch();
  const { activeEvent } = useSelector((state) => state.calendar);

  const { events } = useSelector((state) => state.calendar);

  const [lastView, setLastView] = useState(
    localStorage.getItem('last-view') || 'month'
  );

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  const onDoubleClick = () => dispatch(uiOpenModal());

  const onSelectEvent = (e) => dispatch(eventSetActive(e));

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('last-view', e);
  };

  const onSelectSlot = (e) => {
    // console.log(e);
    dispatch(eventClearActiveEvent());
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
        onSelectSlot={onSelectSlot}
        selectable={true}
        eventPropGetter={eventStyleGetter}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <AddNewFab />

      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};
