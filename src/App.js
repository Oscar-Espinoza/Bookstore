import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Books from './Routes/Books';
import Categories from './Routes/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route exact path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
