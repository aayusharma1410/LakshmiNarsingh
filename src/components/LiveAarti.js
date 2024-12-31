import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
const LiveAarti = () => {
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
            }
            else {
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
    return (_jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Live Aarti" }), isLive ? (_jsxs("div", { children: [_jsx("p", { className: "text-xl mb-4", children: "Aarti is currently live!" }), _jsx("div", { className: "aspect-w-16 aspect-h-9", children: _jsx("iframe", { src: "https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID", frameBorder: "0", allowFullScreen: true, className: "w-full h-full" }) })] })) : (_jsxs("div", { children: [_jsxs("p", { className: "text-xl mb-4", children: ["The next aarti will start at ", nextAartiTime] }), _jsxs("p", { children: ["Aarti times: ", aartiTimes.join(', ')] })] }))] }));
};
export default LiveAarti;
