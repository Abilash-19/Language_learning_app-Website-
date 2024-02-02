import './App.css';
import Creators from './components/Creators';
import Homepage from './components/Homepage';
import Leaderboard from './components/Leaderboard';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={ <Homepage/> } />
      <Route path='/leaderboard' exact element={ <Leaderboard/> } />
      <Route path='/creators' exact element={ <Creators/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
