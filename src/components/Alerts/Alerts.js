import React from 'react';
import './Alerts.css';

const Alert = ({message}) => (
  <div className="Alert">
    {message}
  </div>
);

export default ({alerts}) => <div className="Alerts">{alerts.map(alert => <Alert key={alert.alertId} {...alert} />)}</div>;
