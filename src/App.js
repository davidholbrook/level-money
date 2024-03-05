import './App.css';
import Menu from './layout/menu';
import Monthly from './layout/monthly';
import Special from './layout/special';

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
