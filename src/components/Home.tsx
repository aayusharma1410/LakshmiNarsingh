import React from 'react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.bhaskarassets.com/web2images/521/2023/05/02/whatsapp-image-2023-05-02-at-31314-pm-1_1683022145.jpeg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Shri Lakshmi<br></br> Narsingh Mandir Hasampur</h1>
        <p className="text-xl mb-8">560+ years old Shri Narsingh Mandir Hasampur<br></br>
        ॐ उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् ।<br></br>
नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् ॥</p>
        <button 
          onClick={() => setCurrentPage('aarti')}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Aarti
        </button>
        <button 
          onClick={() => setCurrentPage('bhogAarti')}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Bhog Aarti
        </button><br></br>
        <button 
          onClick={() => setCurrentPage('importantEvents')}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Important Events and Dates
        </button>
      </div>
    </div>
  );
};

export default Home;