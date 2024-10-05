import './App.css';
import AboutPage from './pages/about/AboutPage.jsx';
import HomePage from './pages/home/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/notFound/NotFoundPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter basename="/ui-ux-lab">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
