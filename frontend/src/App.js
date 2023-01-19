import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import  Header  from './components/Header'
import PrivateRoutes from './utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
              {/* as of v6.0 things won't work if Routes are not added */}
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/" exact/> 
            <Route element={<LoginPage />} path="/login/"/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
