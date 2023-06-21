import React, { useState } from 'react';

// Sample train schedule data
const trainScheduleData = [
  { id: 1, trainName: 'Express 1', trainnumber:2344,departureTime: '10:00 AM', seatsAvailable:23,price:120,delayedBy:5},
  { id: 2, trainName: 'Local 1', trainnumber:2341,departureTime: '11:30 AM', seatsAvailable:45,price:85 ,delayBy:10},
  { id: 3, trainName: 'Express 2',trainnumber:2345, departureTime: '2:00 PM', seatsAvailable:0,price:854,delayedBy:35 },
];

function App() {
  const [trainSchedule, setTrainSchedule] = useState(trainScheduleData);

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>seatsAvailable</th>
            <th>price</th>
            <th>delayedBy</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map((train) => (
            <tr key={train.id}>
              <td>{train.trainName}</td>
              <td>{train.trainnumber}</td>
              <td>{train.departureTime}</td>
              <td>{train.seatsAvailable}</td>
              <td>{train.price}</td>
              <td>{train.delayedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;