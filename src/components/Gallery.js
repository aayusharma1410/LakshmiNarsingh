import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Gallery = () => {
    const media = [
        {
            type: 'image',
            url: 'https://images.bhaskarassets.com/web2images/521/2023/05/02/whatsapp-image-2023-05-02-at-31314-pm-1_1683022145.jpeg'
        },
        {
            type: 'image',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTP7lss-ZY0NoH1hXUNdyWoD-i7AdB5jsuA&s'
        },
        {
            type: 'image',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhSbvMVBP2izz7hU5m-ch4Mh8BYuTqUIkyg&s'
        },
        {
            type: 'image',
            url: "https://i.ibb.co/mDqKWNJ/IMG-20220415-100126.jpg"
        },
        {
            type: 'video',
            url: 'https://youtu.be/a5KBP873a3U?si=tA5qYOCpK5t_b679'
        },
        {
            type: 'image',
            url: "https://i.ibb.co/tMb3nFV/IMG-20220513-182745.jpg"
        },
        {
            type: 'video',
            url: 'https://youtu.be/b-7K0sBa_64?si=XtPJRjVCj1zE7Sa4'
        },
        {
            type: 'image',
            url: "https://i.ibb.co/YQxc6QC/IMG-20221104-071129.jpg"
        },
        {
            type: 'image',
            url: "https://i.ibb.co/3CmnMNH/IMG-20221110-145055.jpg"
        },
        {
            type: 'image',
            url: "https://i.ibb.co/5hP1Zx4/IMG-20230424-132751.jpg"
        }
    ];
    return (_jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Gallery" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: media.map((item, index) => (_jsx("div", { className: "overflow-hidden rounded-lg shadow-lg", children: item.type === 'image' ? (_jsx("img", { src: item.url, alt: `Gallery image ${index + 1}`, className: "w-full h-64 object-cover" })) : (_jsxs("video", { controls: true, className: "w-full h-64 object-cover", children: [_jsx("source", { src: item.url, type: "video/mp4" }), "Your browser does not support the video tag."] })) }, index))) })] }));
};
export default Gallery;
