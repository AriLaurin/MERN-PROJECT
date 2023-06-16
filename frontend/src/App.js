import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      {/*All pages that want to use routes must go through browserRouter*/ }
     <BrowserRouter> 
     <Navbar/>
     <div className="pages">
      {/*Routes*/}
      <Routes>
        <Route
        path="/" 
        element={<Home/>} //element is the component we use
        />
      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
