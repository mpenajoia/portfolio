import { useState } from "react";
import Home from "./components/Home";
import { ObjectContext } from "./context/ObjectContext";
import Info from './info/info.json'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [info, setInfo] = useState(Info)
  return (
    <ObjectContext.Provider value={{ info }}>
      <Router>
        <div className="flex w-full justify-center flex-col no-scrollbar">
            <Home/>      
        </div>
      </Router>
    </ObjectContext.Provider>
  );
}

export default App;
