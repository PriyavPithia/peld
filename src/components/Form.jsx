import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Form = () => {
  const [answers, setAnswers] = useState(['', '', '', '', '', '', '']);
  const [showRetryButton, setShowRetryButton] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [dropdownIndex, setDropdownIndex] = useState(null); // Track the index of the active dropdown
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if form has been submitted

  const correctAnswers = ['L', 'L', 'P', 'E', 'L', 'E', 'E'];

  const handleInputChange = (index, answer) => {
    if (!formSubmitted) {
      const newAnswers = [...answers];
      newAnswers[index] = answer;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormComplete = answers.every(answer => ['P', 'E', 'L', 'D'].includes(answer.toUpperCase()));
    if (!isFormComplete) {
      alert('Please fill in all fields.');
      return;
    }

    const isCorrect = answers.every((answer, index) => answer.toUpperCase() === correctAnswers[index]);

    if (isCorrect) {
      setFeedbackMessage('Incredible! Your answer key is right!');
      setShowRetryButton(false); // Hide retry button if answer is correct
      setShowSubmitButton(false);
      setFormSubmitted(true);
    } else {
      setFeedbackMessage('Sorry, incorrect answer. Retry again');
      setShowRetryButton(true);
      setShowSubmitButton(false);
    }
  };

  const handleRetry = () => {
    setAnswers(['', '', '', '', '', '', '']);
    setShowRetryButton(false);
    setShowSubmitButton(true);
    setFeedbackMessage('');
    setFormSubmitted(false);
    setDropdownIndex(null); // Reset dropdown index
  };

  const handleInputClick = (index) => {
    if (!formSubmitted) {
      setDropdownIndex(index === dropdownIndex ? null : index); // Toggle dropdown menu visibility
    }
  };

  const handleDropdownItemClick = (index, value) => {
    if (!formSubmitted) {
      setAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers];
        newAnswers[index] = value;
        return newAnswers;
      });
      setDropdownIndex(null); // Close dropdown after selection
    }
  };

  return (
    <div className="lg:flex gap-[60px]   justify-center items-center">
        <div className='bg-blue-600 '>
            <img className=' w-[1400px] ' src="./public/images/erd.jpeg" alt="" />
        </div>


        <div className='  p-2'>

        
      <h1 className="text-lg mt-[30px] lg:mt-0 font-bold mb-4 text-black">Fill your ERD with "P", "E", "L", "D"</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        {[...Array(7)].map((_, index) => (
          <div key={index} className="flex items-center mb-4">
            <label htmlFor={`answer${index}`} className="mr-6 text-white bg-black pt-2 pb-2 pr-4 pl-4 rounded-md font-bold">{index + 1}</label>
            <div className="relative">
              <div
                id={`answer${index}`}
                className={`p-2 pl-4 w-[235px] pr-2 flex justify-between items-center border-2 border-gray text-left ${
                  answers[index] ? 'text-black' : 'text-gray-400'
                } cursor-pointer`}
                onClick={() => handleInputClick(index)}
              >
                {answers[index] || [
                  'Store',
                  'Plan',
                  'Customer Account',
                  'Orders',
                  'Product',
                  'Product page view',
                  'Ecommerce Checkout'
                ][index]}
                <FaAngleDown className="ml-2 text-black" />
              </div>
              {dropdownIndex === index && (
                <div className="absolute text-left top-full left-0 z-10 bg-[#f8f8f8] w-full shadow-md divide-y-2 rounded-b-md">
                  <div className="flex flex-col">
                    {['P', 'E', 'L', 'D'].map((option, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleDropdownItemClick(index, option)}
                        style={{ pointerEvents: formSubmitted ? 'none' : 'auto' }} // Disable dropdowns if form is submitted
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
            
          </div>
          
        ))}
        <div className='flex lg:w-full justify-end'>
        <button 
          className="bg-neutral-900 hover:bg-neutral-950 w-[150px] text-white font-bold py-2 px-4 rounded-none mt-4"
          type="submit"
          style={{ display: showSubmitButton ? 'block' : 'none' }}
          disabled={!showSubmitButton}
        >
          SUBMIT
        </button>
        </div>
        
        

        
      </form>
      
      {showRetryButton && (
        <div className=' justify-center  lg:justify-end flex '>
          <button
            className=" bg-neutral-900 w-[150px] hover:bg-neutral-950 text-white  font-bold py-2 px-4 rounded-none mt-4 "
            onClick={handleRetry}
            style={{ display: showRetryButton ? 'block' : 'none' }}
          >
            RETRY
          </button>
        </div>
      )}
      <div className={`mt-4 mr-3 font-bold  lg:text-end w-full ${feedbackMessage === 'Incredible! Your answer key is right!' ? 'text-green-500' : 'text-red-500 '}`}>
          {feedbackMessage}{feedbackMessage &&   <Link to="/answer-key" className='text-blue-500 font-medium underline text-sm'><br />Click here to view the answer key</Link> }
        </div>
        </div>
      
      
    </div>
  );
};

export default Form;
