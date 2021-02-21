import './App.css';
import './bootstrap.min.css';
import NavbarTab from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import FormTestimonial from './components/Form'
import Response from './components/Response';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          {/* <Response/> */}

        <NavbarTab/>
        <Route  exact path="/"  component={Content} />

        <Route  exact path="/FormTestimonial"  component={FormTestimonial} />

        <Route  exact path="/Response"  component={Response} />


      </div>
    </BrowserRouter>
    
  );
}

export default App;
