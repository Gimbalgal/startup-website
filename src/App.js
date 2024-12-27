
import './App.css';
import Navbar from './Navbar';
import Home from './Home/home';
import Porfolio from './Porfolio/porfolio';
import Contact from './Contact/contact';
import Services from './Service/service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Porfolio />
      <Contact />
      <Services />
        
      </div>

  );
}

export default App;
