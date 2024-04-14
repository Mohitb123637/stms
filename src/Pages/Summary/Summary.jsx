import Left from './pages/Left';
import RightSummary from './pages/RightSummary';

const Summary = () => {
  return (
    <>
      <div className="w-10/12 ml-auto mr-10  text-white">
        <div className="flex mt-8">
          <div className="flex-1">
            <Left />
          </div>
          <div className="flex-1">
            <RightSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
