import Navbar from './Navbar';
import Home from "./Home";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      {/* I seperate the content in different components so the App.jsx looks clean */}
      </div>
    </div>
  );
}

export default App;
