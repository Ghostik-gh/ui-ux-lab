import { useNavigate } from 'react-router-dom';
import './About.css';
import Button from './components/Button';

function About() {
  const navigate = useNavigate();
  const navigateToRoot = () => {
    navigate('/');
  };

  return (
    <>
      <h1>About Furniture Creater</h1>
      <div className="card">
        <Button
          label="Home"
          onClick={navigateToRoot}
          color="blue"
          size="large"
        />
      </div>
    </>
  );
}

export default About;
