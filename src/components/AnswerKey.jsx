import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AnswerKey = () => {
  const [selectedTab, setSelectedTab] = useState('answerKey');

  return (
    <div className="flex justify-center w-full h-screen">
      {/* Sidebar */}
      <div className="bg-white max-w-[200px] w-1/4 flex flex-col border-r-1 pr-5  border-black">
        <button
          className={`p-3 rounded-md border-none focus:outline-none ${
            selectedTab === 'answerKey' ? 'bg-black text-white' : 'hover:bg-neutral-200 duration-200'
          }`}
          onClick={() => setSelectedTab('answerKey')}
        >
          Answer Key
        </button>
        <button
          className={`p-3 rounded-md border-none focus:outline-none ${
            selectedTab === 'videoTutorial' ? 'bg-black text-white' : 'hover:bg-neutral-200 duration-200'
          }`}
          onClick={() => setSelectedTab('videoTutorial')}
        >
          Explainer Video
        </button>
        {/* Third tab for Home */}
        <Link to="/">
          <button
            className={`p-3 w-full rounded-md focus:outline-none ${
              selectedTab === 'home' ? 'bg-black text-white' : 'hover:bg-neutral-200 duration-200'
            }`}
            onClick={() => setSelectedTab('home')}
          >
            Home
          </button>
        </Link>
      </div>

      {/* Divider */}
      <div className="w-px sm:mr-[20px] lg:mr-[40px] xl:mr-[90px] bg-gray-300"></div>

      {/* Content */}
      <div className="w-3/4 p-4">
        {selectedTab === 'answerKey' ? (
          <div>
            <h2 className="text-2xl font-bold">Answer Key</h2>
            <img src="../public/images/ERDans.jpeg" alt="Answer Key" className="mt-4" />
          </div>
        ) : selectedTab === 'videoTutorial' ? (
          <div>
            <h2 className="text-2xl font-bold">Explainer Video</h2>
            <div className="mt-[30px]">
              <video controls width="100%" height="auto">
                <source src="../public/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          // Redirect to the Form page when Home tab is selected
          <Link to="/">
            <h2 className="text-2xl font-bold">Home</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AnswerKey;
