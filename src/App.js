import './App.css';
import './bootstrap.min.css';
import NavbarTab from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import FormTestimonial from './components/Form'
import Response from './components/Response';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Response/>
          <Route  exact path="/FormTestimonial"  component={FormTestimonial} />

        <NavbarTab/>
        {/* <Route exact path='/' component={NavbarTab} /> */}


      </div>
    </BrowserRouter>
    
  );
}

export default App;
