import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface CalendarProps {
  events: any[];
  onDateSelect: (date: Date) => void;
  onEventClick: (info: any) => void;
}

const Calendar: React.FC<CalendarProps> = ({ events, onDateSelect, onEventClick }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-soft p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        select={({ start }) => onDateSelect(start)}
        eventClick={onEventClick}
        height="auto"
        slotMinTime="08:00:00"
        slotMaxTime="17:00:00"
        allDaySlot={false}
        slotDuration="00:30:00"
        expandRows={true}
        stickyHeaderDates={true}
        nowIndicator={true}
      />
    </div>
  );
};

export default Calendar;