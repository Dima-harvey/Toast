import './App.css';
import { Toast } from 'toast';

const warning = [{
  id:1,
  description: 'Error toast example',
  backgroundColor: 'yellow',
  icon: 'bibib',
}]
function App() {
  return (
    <div className="App">
      <Toast value={warning}>Hello</Toast>
    </div>
  );
}

export default App;
