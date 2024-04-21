// import React from 'react';
import {
  FaQuestion,
  FaClock,
  FaPercentage,
  FaCalendarAlt,
  FaExclamationCircle,
  FaCheck,
} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';

const Report = () => {
  const data = useSelector((state) => state.exams.resultData);
  console.log(data);

  return (
    <div className="flex container w-3/4 flex-col mx-auto mt-5 px-4">
      <div
        className="text-3xl font-bold self-center mb-5 text-white"
        style={{
          background: 'linear-gradient(to right, #4F46E5, #2E8B57)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Your Report
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg shadow-md p-5 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <FaQuestion className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">
            Total Questions
          </h2>
          <p className="text-gray-200">5</p>
        </div>
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-md p-5 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <FaCheck className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">
            Right Questions
          </h2>
          <p className="text-gray-200">3</p>
        </div>
        <div className="bg-gradient-to-br from-pink-400 to-red-600 rounded-lg shadow-md p-5 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <ImCross className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">
            Wrong Questions
          </h2>
          <p className="text-gray-200">2</p>
        </div>

        <div className=" bg-gradient-to-br from-blue-400 to-cyan-600  rounded-lg shadow-md p-3 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <FaExclamationCircle className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">
            Skipped Questions
          </h2>
          <p className="text-gray-200">2</p>
        </div>

        <div className="bg-gradient-to-br from-orange-400 to-red-600 rounded-lg shadow-md p-3 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <FaClock className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">Time Taken</h2>
          <p className="text-gray-200">1 hour 30 minutes</p>
        </div>

        <div className="bg-gradient-to-br from-pink-400 to-blue-600 rounded-lg shadow-md p-3 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <FaPercentage className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">Percentage</h2>
          <div className="w-full bg-gray-300 h-6 rounded-full">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: '70%' }}
            ></div>
          </div>
          <p className="text-gray-200">77%</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg shadow-md p-5 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <FaCalendarAlt className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">Date</h2>
          <p className="text-gray-200">March 28, 2024</p>
        </div>

        <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg shadow-md p-5 flex flex-col justify-center items-center transition duration-300 hover:scale-105">
          <FaQuestion className="text-4xl mb-4 text-white" />
          <h2 className="text-lg font-semibold mb-2 text-white">Title</h2>
          <p className="text-gray-200">Content</p>
        </div>
      </div>
      <div className=" mt-20 px-4">
        {' '}
        <h2
          className="text-2xl font-bold mb-4 text-gray-800 text-center"
          style={{
            background: 'linear-gradient(to right, #4F46E5, #2E8B57)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          All Questions
        </h2>{' '}
        {data.data.attendedQuestion.map((question, questionIndex) => (
          <div key={question._id} className="mb-4">
            <p className="font-semibold mb-2 text-gray-600">
              {' '}
              Question {questionIndex + 1}: {question.question}
            </p>
            <div className="grid grid-cols-1 gap-2">
              {question.options.map((option, optionIndex) => (
                <div
                  key={option.key}
                  className={`p-2 rounded-lg
                ${
                  question.answer === option.key
                    ? 'bg-green-200'
                    : question.correct === true &&
                      option._id === question.marked_option
                    ? 'bg-green-200'
                    : question.correct === false &&
                      option._id === question.marked_option
                    ? 'bg-red-200'
                    : 'bg-gray-200'
                }
                `}
                >
                  <p className="text-gray-700">
                    {optionIndex + 1}: {option.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
