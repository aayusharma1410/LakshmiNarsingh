import React, { useState, useEffect } from 'react';

const LiveAarti: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [nextAartiTime, setNextAartiTime] = useState('');

  // Simulated aarti times (replace with actual times set by the user)
  const aartiTimes = ['06:00', '12:00', '18:00'];

  useEffect(() => {
    const checkLiveStatus = () => {
      const now = new Date();
      const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
      
      if (aartiTimes.includes(currentTime)) {
        setIsLive(true);
      } else {
        setIsLive(false);
        // Find the next aarti time
        const nextTime = aartiTimes.find(time => time > currentTime) || aartiTimes[0];
        setNextAartiTime(nextTime);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Live Aarti</h2>
      {isLive ? (
        <div>
          <p className="text-xl mb-4">Aarti is currently live!</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xl mb-4">The next aarti will start at {nextAartiTime}</p>
          <p>Aarti times: {aartiTimes.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default LiveAarti;