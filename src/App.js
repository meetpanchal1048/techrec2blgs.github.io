import './App.css';
import Blogs from './Component/Blogs';
import footerimg from './logo1.png'
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <>

      <div className="background-main">
        <Navbar/>
        <Blogs/>
      </div>

      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-left-top">
            <img src={footerimg} alt="logo" />
            <p>TechRec</p>
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
    </>
  );
}

export default App;
