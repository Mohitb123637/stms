import { Link } from 'react-router-dom';

const LeftTopic = () => {
  return (
    <div className="w-full">
      <div className="w-full  bg-gray-300 rounded-2xl shadow-md p-4 md:p-8 mb-8 md:mb-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h4 className="text-3xl font-semibold text-gray-800 mb-2">
            Energy Lorem, ipsum.
          </h4>

          <img
            src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/10/%C2%A9-iStock-cokada.jpg"
            alt="Boy Coloring"
            // className="w-1/2 md:w-auto h-auto md:h-40 lg:h-48 md:-mt-6 md:-ml-6"
            className=" w-36 rounded-lg h-24"
          />
        </div>
      </div>
      <div className="w-full  h-auto bg-gray-300 rounded-2xl shadow-md p-4 md:p-8 mt-6">
        <Link to="/summary" target="_blank">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-black">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/10/%C2%A9-iStock-cokada.jpg"
                alt=""
                className=" h-11 w-11 rounded-md mr-4"
                //   style={{ height: '33px', width: '33px' }}
              />
              <h2 className="text-lg font-semibold">Forms of Energy</h2>
            </div>
            <div className="mr-3 md:mr-6 text-sm font-semibold border-4 border-solid border-gray-800 rounded-full w-11 h-11 flex items-center justify-center">
              100%
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full  h-auto bg-gray-300 rounded-2xl shadow-md p-4 md:p-8 mt-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-black">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/2020/06/f75/WF-view.png?itok=P-VlZRBr"
              alt=""
              className=" h-11 w-11 rounded-md mr-4"
              //   style={{ height: '33px', width: '33px' }}
            />
            <h2 className="text-lg font-semibold">Works of Energy.</h2>
          </div>
          <div className="mr-3 md:mr-6 text-sm font-semibold border-4 border-solid border-gray-800 rounded-full w-11 h-11 flex items-center justify-center">
            100%
          </div>
        </div>
      </div>
      <div className="w-full  h-auto bg-gray-300 rounded-2xl shadow-md p-4 md:p-8 mt-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-black">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://i.pinimg.com/474x/15/23/d9/1523d9f7715632de8167dacf19ea2e15.jpg"
              alt=""
              className=" h-11 w-11 rounded-md mr-4"
              //   style={{ height: '33px', width: '33px' }}
            />
            <h2 className="text-lg font-semibold">Kinetic Energy</h2>
          </div>
          <div className="mr-3 md:mr-6 text-sm font-semibold border-4 border-solid border-gray-800 rounded-full w-11 h-11 flex items-center justify-center">
            100%
          </div>
        </div>
      </div>
      <div className="w-full  h-auto bg-gray-300 rounded-2xl shadow-md p-4 md:p-8 mt-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-black">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://static.javatpoint.com/physics/images/potential-energy.jpg"
              alt=""
              className=" h-11 w-11 rounded-md mr-4"
              //   style={{ height: '33px', width: '33px' }}
            />
            <h2 className="text-lg font-semibold"> Potential Energy</h2>
          </div>
          {/* <div className="mr-3 md:mr-6 text-sm font-semibold border-4 border-solid border-gray-800 rounded-full w-11 h-11 flex items-center justify-center">
              100%
            </div> */}
          <button className="px-3 md:px-4 py-2 text-white bg-gray-900 rounded-md hover:bg-black focus:outline-none">
            Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftTopic;
