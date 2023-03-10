import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Main from './inc/Main';
import Header from './inc/Header';
import Profile from './inc/Profile';
import Gallery from './inc/Gallery';
import Lecture from './inc/Lecture';
import Contact from './inc/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello World</h1>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
