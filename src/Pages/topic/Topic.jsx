import LeftTopic from './pages/LeftTopic';
import RightTopic from './pages/RightTopic';

const Topic = () => {
  return (
    <>
      <div className="w-10/12 ml-auto mr-10  text-white">
        <div className="flex mt-8">
          <div className="flex-1">
            <LeftTopic />
          </div>
          <div className="flex-1">
            <RightTopic />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
