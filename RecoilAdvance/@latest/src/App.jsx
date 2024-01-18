import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { jobsAtom, networkAtom, messageAtom, totalSelector } from './atoms';
import './App.css'; // Make sure you have a corresponding CSS file for styling


function App() {
  const net = useRecoilValue(networkAtom);
  const job = useRecoilValue(jobsAtom);
  const total = useRecoilValue(totalSelector);
  const [message, setMessage] = useRecoilState(messageAtom);

  const handleHomeClick = () => {
    // Add logic for Home button click
  };

  const handleNetworkClick = () => {
    // Add logic for My Network button click
  };

  const handleJobsClick = () => {
    // Add logic for Jobs button click
  };

  const handleMessagingClick = () => {
    // Add logic for Messaging button click
  };

  const handleNotificationsClick = () => {
    // Add logic for Notifications button click
  };

  const handleIncrementMessage = () => {
    setMessage(message + 1);
  };

  return (
    <div className="app-container">
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleNetworkClick}>My Network ({net >= 100 ? '99+' : net})</button>
      <button onClick={handleJobsClick}>Jobs {job}</button>
      <button onClick={handleMessagingClick}>Messaging</button>
      <button onClick={handleNotificationsClick}>Notifications</button>
      <button onClick={handleIncrementMessage}>{message}</button>
      <h1>{total}</h1>
    </div>
  );
}

export default App;
