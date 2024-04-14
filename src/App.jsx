// import './App.css';
// import Home from './Pages/home/Home';
// import Sidebar from './components/Sidebar';
// import Subject from './Pages/subject/Subject';
// import Topic from './Pages/topic/Topic';
// import Summary from './Pages/Summary/Summary';
// import { Route, Routes } from 'react-router-dom';
// import Login from './Pages/login/Login';

// function App() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/chapters/:id" element={<Subject />} />
//         <Route path="/topic" element={<Topic />} />
//         <Route path="/summary" element={<Summary />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Home from './Pages/home/Home';
import Sidebar from './components/Sidebar';
import Subject from './Pages/subject/Subject';
import Topic from './Pages/topic/Topic';
import Summary from './Pages/Summary/Summary';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/login/Login';
import PrivateRoute from './components/private/PrivateRoute';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/chapters/:id" element={<Subject />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
