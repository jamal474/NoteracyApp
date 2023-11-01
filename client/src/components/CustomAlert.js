import React, { useState, useEffect } from 'react';
import '../styles/CustomAlert.css'; // Import your CSS file

function CustomAlert({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide the alert after a certain time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Optionally, you can call a callback function when the alert is closed
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return isVisible ? <div className="custom-alert">{message}</div> : null;
}

export default CustomAlert;
