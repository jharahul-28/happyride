import { useState } from 'react';
import './App.css';
import BasicTabs from './components/BasicTabs';
import { Button, DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
import Load from './components/Load';
import Detail from './components/Detail';
dayjs.extend(customParseFormat);

function App() {
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');

  const onChangeDate = (date, dateString) => {
    setDateValue(dateString);
    console.log(date);
    console.log(dateString);
  };
  const onChangeTime = (time, timeString) => {
    setTimeValue(timeString);
    console.log(timeString);
  };

  return (
    <div className="webpage">
      <div className='app'>
        <BasicTabs />
        <div className="dateTime">
          <div className='dtDiv' id="input1">
            <p>PICK UP DATE</p>
            <DatePicker onChange={onChangeDate} />
          </div>
          <div className='dtDiv' id="input2">
            <p>PICH UP TIME</p>
            <TimePicker onChange={onChangeTime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
          </div>
        </div>
        <Load />
        <Detail />
        <button className='searchButton'>Search</button>
      </div>
    </div>
  );
}

export default App;
