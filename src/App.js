import { useState, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';
import Form from './components/Form';
import { nanoid } from 'nanoid';
// import { getTime } from './utils'


function App() {
  const [clocks, setClocks] = useState([])

  const getTime = (timezone) => {
    const parsedUserTimezone = +Number.parseFloat(timezone);
    const hoursUserTimezone = Math.trunc(parsedUserTimezone);
    const minutesUserTimezone = (parsedUserTimezone % 1).toFixed(2) * 100;
    const date = new Date();
    const timezoneOffset = date.getTimezoneOffset();
    const hoursTimezoneOffset = Math.floor(timezoneOffset / 60);
    const minutesTimezoneOffset = timezoneOffset % 60;

    date.setHours(date.getHours() + hoursTimezoneOffset);
    date.setMinutes(date.getMinutes() + minutesTimezoneOffset);
    date.setHours(date.getHours() + hoursUserTimezone);
    date.setMinutes(date.getMinutes() + minutesUserTimezone);

    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const result = [h, m, s]
    console.log(result)
    return result
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setClocks(getTime())
  //   }, 1000)

  // }, [])

  const addNewClock = (clock) => {
    setClocks((prevState) => [...prevState, {
      id: nanoid(),
      name: clock.name,
      timeZone: clock.timeZone = getTime(clock.timeZone)
    }]);
  };

  const deleteClock = (id) => {
    setClocks(clocks.filter((i) => i.id !== id));
  };

  return (
    <div className="wrapper">
      <Form addNewClock={addNewClock} />
      <div>
        {Array.isArray(clocks) && clocks.length > 0
          ? clocks.map((clock) => {
            return (
              <Clock
                key={clock.id}
                id={clock.id}
                name={clock.name}
                timeZone={clock.timeZone}
                deleteClock={deleteClock}
                clocks={clocks}
              />
            );
          })
          : <div>
            <p className="no-clocks">No clocks...</p>
          </div>}
      </div>
    </div>
  );
}

export default App;
