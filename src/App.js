
import Contact from "./components/contact/Contact"
import { Route, Routes} from 'react-router-dom';
import Home from "./routes/Home";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> } > </Route>
          <Route path='/contact' element={ <Contact /> }> </Route>
        </Routes>
    </div>
  );
}

export default App;
