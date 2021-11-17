import './assets/css/main.css'

import Navbar from "./components/Navbar"
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Navbar/>
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
