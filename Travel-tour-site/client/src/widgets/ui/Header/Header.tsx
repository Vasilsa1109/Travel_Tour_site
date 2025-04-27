import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@shared/ui/Button";
export const Header = () => {
  return (
    <header className="CLASS__NAME">
      <div className="CLASS__NAME">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5333/5333722.png"
          alt=""
          id="logo"
        />
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
          <Link to="/about" className="CLASS__NAME">
            About
          </Link>
          <Link to="/tours" className="CLASS__NAME">
            Tours
          </Link>
          <Link to="/destinations" className="CLASS__NAME">
            Destinations
          </Link>
          <Link to="/blog" className="CLASS__NAME">
            Blog
          </Link>
        </nav>
      </div>
      <Button id="booking">
        <Link to="/contact" className="CLASS__NAME">
          BOOK NOW ↗
        </Link>
      </Button>
    </header>
  );
};
