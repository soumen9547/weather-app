import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone'; // Import the moment-timezone library
import './availability-calendar.css'; // Import the CSS file

const AvailabilityCalendar = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const currentDate = new Date();
  const [displayedDate, setDisplayedDate] = useState(null);
  const [displayedTime, setDisplayedTime] = useState(null);

  const handleDateTimeChange = date => {
    setSelectedDateTime(date);

    const formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

     const formattedTime = moment(date)
      .tz('Asia/Kolkata') // Set the timezone to IST
      .format('h:mm A');

    setDisplayedDate(formattedDate);
    setDisplayedTime(formattedTime);
  };

  return (
    <div className="availability-calendar-container">
      <h2 className="textdata">Book your slot</h2>
      <section className="d-flex">
        <div className="calendar-wrapper">
          <DatePicker
            selected={selectedDateTime}
            onChange={handleDateTimeChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
            minDate={currentDate}
            multiple
            timeZone="asia/kolkata"
          />
        </div>
        <div className="selected-info">
          <p>Selected Date: {displayedDate}</p>
          <p>Selected Time: {displayedTime}</p>
        </div>
      </section>
    </div>
  );
};

export default AvailabilityCalendar;
