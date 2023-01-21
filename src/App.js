import './App.css';
import Book from './components/Book';
import Navbar from './components/Navbar';
import NewBook from './components/NewBook';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ul className="books">
          <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried"/></li>
          <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried"/></li>
          <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried"/></li>
        </ul>
        <div class="horizontal-divider"></div>
        <NewBook />
      </div>
    </div>
  );
}

export default App;
