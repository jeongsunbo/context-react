import MainPage from './components/MainPage';
import './App.css';
import {useState} from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [ isDark, setIsDark ] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <div className="App">
        <MainPage/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
