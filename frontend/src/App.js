import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import  Header  from './components/Header'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
              {/* as of v6.0 things won't work if Routes are not added */}
          <PrivateRoute element={<HomePage />} path="/" exact/> 
          <PrivateRoute element={<LoginPage />} path="/login/"/>
        
      </Router>
    </div>
  );
}

export default App;
