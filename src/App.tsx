import Counter from './components/Counter';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown options={['Ruby', 'Go', 'Dart']} />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
