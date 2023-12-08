
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom';


import FrontPage from './pages/frontPage';

import Navbar from './components/Navbar';



function App() {
  return (
    <Router>

      <div className={`App `}>
        <div className='main_frontPage'>
           <Navbar/>
          <Routes>
            <Route path='/' element={<FrontPage/> } />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
