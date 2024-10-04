import { useNavigate } from 'react-router-dom';
import './components/Button';
import './Home.css';
import Button from './components/Button';

function Home() {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <>
      <h1>Furniture</h1>
      <div className="card">
        <p>
          It's just <code>src/Home.jsx</code>
        </p>
        <Button
          label="About"
          onClick={navigateToAbout}
          color="blue"
          size="large"
        />
      </div>
    </>
  );
}

export default Home;
