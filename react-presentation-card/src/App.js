
import './App.css';
import About from './components/About'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import Name from './components/Name'
import Photo from './components/Photo'

function App() {
  return (
    <div className="App">
      <Photo />
      <Name />
      <Buttons />
      <About />
      <Footer />
    </div>
  );
}

export default App;
