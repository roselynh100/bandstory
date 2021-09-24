import './App.css';

import { Heading } from './components/Heading'
import { First } from './components/First'
import { Second } from './components/Second'
import { Third } from './components/Third'
import { Fourth } from './components/Fourth'


function App() {
  return (
    <div className="container">
      <Heading />
      <div className="grades">
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
    </div>
  );
}

export default App;
