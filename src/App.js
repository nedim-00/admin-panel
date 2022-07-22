import React from 'react'
import Topbar from './components/Topbar'
import Employees from './components/Employees';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddItem from './components/AddItem';
import Top from './components/Top';
import AddEmployee from './components/AddEmployee';
import DeleteItem from './components/DeleteItem';
import Menu from './components/Menu';

function App() {

  return (
    <Router>
      <div className="font-normal">
      
        <Top />
        
        <div className='flex min-h-screen top-0 absolute'>
          <Topbar />
          <Routes >
            <Route path="/employees" element={<Employees />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/deleteitem" element={<DeleteItem />} />
            <Route path="/admin-panel" element={<Menu />} />
          </Routes>
        </div>
          
      </div>
    </Router>
  );
}

export default App;
