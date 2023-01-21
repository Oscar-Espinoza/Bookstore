import './App.css';
import Book from './components/Book';
import Navbar from './components/Navbar';
import NewBook from './components/NewBook';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Book category="history" author="Oscar" title="The little crazy"/>
        <div class="horizontal-divider"></div>
        <NewBook />
      </div>
    </div>
  );
}

export default App;
