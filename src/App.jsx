import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex w-full justify-center flex-col">
      
        <Navbar />
        <Hero />
        <div>
          About
        </div>
        <div>
          Projects
        </div>
        <div>
          Contact
        </div>
        <footer>
          Footer
        </footer>
      
    </div>
  );
}

export default App;
