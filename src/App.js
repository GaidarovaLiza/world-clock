import { useState, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';
import Form from './components/Form';
import { nanoid } from 'nanoid';

function App() {
  const [clocks, setClocks] = useState([])

  const addNewClock = (clock) => {
    setClocks((prevState) => [...prevState, {
      id: nanoid(),
      name: clock.name,
      timeZone: clock.timeZone
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
