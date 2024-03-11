
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ClientLanding from './Pages/ClientLanding';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ClientLanding />} />
          <Route path = "/register" element={<Register />} />
          <Route path = "/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
