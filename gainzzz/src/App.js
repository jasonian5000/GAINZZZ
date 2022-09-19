import './App.css';
import { findUser } from './actions/supabase';
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      GAINZZZ
      <button onClick={findUser}>find user</button>
    </div>
  );
}

export default App;
