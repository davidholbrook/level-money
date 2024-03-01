import './App.css';
import Header from './components/header';
import Monthly from './components/monthly';
import Special from './components/special';

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Monthly />
        <Special />
      </div>
    </>
  );
}

export default App;
