import { useState } from "react";
import Home from "./components/Home";
import { ObjectContext } from "./context/ObjectContext";
import Info from './info/info.json'

function App() {
  const [info, setInfo] = useState(Info)
  return (
    <ObjectContext.Provider value={{ info }}>
    <div className="flex w-full justify-center flex-col">
        <Home/>
        <div>
          Contact
        </div>
        <footer>
          Footer
        </footer>
      
    </div>
    </ObjectContext.Provider>
  );
}

export default App;
