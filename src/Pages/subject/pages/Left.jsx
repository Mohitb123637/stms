import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Left = () => {
  const selectedSub = useSelector((state) => state.subjects.selectedSubject);
  console.log(selectedSub, 'selectedSubject (before return)');

  return (
    <div className="w-full">
      <div className="w-full  bg-gray-300 rounded-2xl shadow-md p-4 md:p-8 mb-8 md:mb-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h4 className="text-3xl font-semibold text-gray-800 mb-2">Physics</h4>

          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/physics-book-2054930-1730255.png"
            alt="Boy Coloring"
            // className="w-1/2 md:w-auto h-auto md:h-40 lg:h-48 md:-mt-6 md:-ml-6"
            className=" w-24 h-auto"
          />
        </div>
      </div>
      <div className="w-full  h-auto bg-gray-300 rounded-2xl shadow-md p-4 md:p-8 mt-6">
        <Link to="/topic">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-black">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/10/%C2%A9-iStock-cokada.jpg"
                alt=""
                className=" h-11 w-11 rounded-md mr-4"
                //   style={{ height: '33px', width: '33px' }}
              />
              <h2 className="text-lg font-semibold">Energy Lorem, ipsum.</h2>
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
              src="https://physicsworld.com/wp-content/uploads/2019/01/atom-abstract-1014763748-iStock_bluebay2014-2.jpg"
              alt=""
              className=" h-11 w-11 rounded-md mr-4"
              //   style={{ height: '33px', width: '33px' }}
            />
            <h2 className="text-lg font-semibold">Ohm Lorem, ipsum.</h2>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRva5RcJU6uhOPax9hjgd31ai0D3RxH00sVYBwJ-HTFyQ&s"
              alt=""
              className=" h-11 w-11 rounded-md mr-4"
              //   style={{ height: '33px', width: '33px' }}
            />
            <h2 className="text-lg font-semibold">Electricity</h2>
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
              src="https://www.thoughtco.com/thmb/N4O4JvwvxaqegLDow7XDd7xhi9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-637481524-7788e3dc814645379debe599283b658d.jpg"
              alt=""
              className=" h-11 w-11 rounded-md mr-4"
              //   style={{ height: '33px', width: '33px' }}
            />
            <h2 className="text-lg font-semibold"> Law of Motion</h2>
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

export default Left;
