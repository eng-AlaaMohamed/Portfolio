import Home from './home/Home';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from "./components/loading/Loading"

function App() {

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  

  return (
    <div className="App">
        <Home />
        <Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
