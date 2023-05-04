import './App.css';
import Blogs from './Component/Blogs/Blogs';
import footerimg from './logo1.png'
import Navbar from './Component/Navbar/Navbar';
import Config from './Component/Config/Config';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';

function App() {
  return (
    <>

      <div className="background-main">
        <Navbar />
        <Blogs />
        <Config />

      </div>

      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-left-top">
            <img src={footerimg} alt="logo" />
            <h2>TechRec</h2>
          </div>
          <p>On endless journey to find beauty I craft beautifull products that create a lasting impression.</p>
        </div>
        <div className="footer-right">
          <ul>
            <li>Home</li>
            <li>Configure</li>
            <li>Blogs</li>
            <li>Tips</li>
            <li>About</li>

          </ul>
        </div>
      </div>
      <div className="footer-social">
        <span className="footer-line"></span>
        <div className="footer-btm">
          <p>&copy; 2023 TechRec. All right reserved.</p>
          <div className="icons">
            <BsGithub className='icon' />
            <BsLinkedin className='icon' />
            <BsGlobe className='icon' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
