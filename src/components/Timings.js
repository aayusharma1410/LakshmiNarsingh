import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Timings = () => {
    const timings = [
        { event: 'पट खुलने का समय', time: '4:30 AM' },
        { event: 'अभिषेक', time: '4:30 AM-4:45 AM' },
        { event: 'श्रृंगार', time: '4:45 PM-5:00 AM' },
        { event: 'बाल भोग', time: '5:00 AM-5:15 AM' },
        { event: 'मंगला आरती', time: '5:15 AM-5:30 AM' },
        { event: 'राज भोग', time: '11:15 AM-11:30 AM' },
        { event: 'शयन', time: '12:00 PM-4:30 PM' },
        { event: 'पट खुलने का समय', time: '4:30 PM' },
        { event: 'संध्या आरती', time: '7:15 PM-7:30 PM' },
        { event: 'शयन भोग', time: '9:00 PM-9:15 PM' },
        { event: 'रात्री शयन', time: '9:30 PM-4:30 AM' },
    ];
    return (_jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Mandir Timings" }), _jsx("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-orange-600 text-white", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2 text-left", children: "Event" }), _jsx("th", { className: "px-4 py-2 text-left", children: "Time" })] }) }), _jsx("tbody", { children: timings.map((item, index) => (_jsxs("tr", { className: index % 2 === 0 ? 'bg-orange-100' : 'bg-white', children: [_jsx("td", { className: "px-4 py-2", children: item.event }), _jsx("td", { className: "px-4 py-2", children: item.time })] }, index))) })] }) })] }));
};
export default Timings;
