import { Link } from 'react-router-dom';
import '@widgets/ui/Header/Header.css'
export const Header = () => {
  return (
    <header className="CLASS__NAME">
      <div className="CLASS__NAME">
        <img src="https://revelo.vercel.app/assets/images/logos/logo.png" alt="" id='logo'/>
        <Link to="/" className="CLASS__NAME">
          Main page of my app
        </Link>
        <nav className="CLASS__NAME">
          <Link to="/login" className="CLASS__NAME">
            Login
          </Link>
          <Link to="/registration" className="CLASS__NAME">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};