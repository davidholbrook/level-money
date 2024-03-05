import './App.css';
import Menu from './components/menu';
import Monthly from './components/monthly';
import Special from './components/special';

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Menu />
      </div>
      <div className="col-span-10">
        <Monthly />
      </div>
    </div>
  );
}

export default App;
