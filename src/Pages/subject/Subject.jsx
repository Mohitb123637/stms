// import React from 'react'
// import Right from './pages/Right';

import Left from './pages/Left';
import Right from './pages/Right';

const Subject = () => {
  return (
    <>
      <div className="w-10/12 ml-auto mr-10  text-white">
        <div className="flex mt-8">
          <div className="flex-1">
            <Left />
          </div>
          <div className="flex-1">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subject;
