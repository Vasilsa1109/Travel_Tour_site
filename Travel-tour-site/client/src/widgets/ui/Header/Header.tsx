import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@shared/ui/Button";
import { ThemeToggle } from "@shared/ui/ThemeToggle";
export const Header = () => {
  return (
    <header className="header"> 
    <ThemeToggle />
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5333/5333722.png"
          alt=""
          id="logo"
        />
        <Link to="/" className="link">
          Main page of my app
        </Link>
        <nav className="links">
          <Link to="/login" className="link">
            Login
          </Link>
          <Link to="/registration" className="link">
            Register
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/tours" className="link">
            Tours
          </Link>
          <Link to="/destinations" className="link">
            Destinations
          </Link>
          <Link to="/blog" className="link">
            Blog
          </Link>
        </nav>
      </div>
      
      <Button id="booking">
        <Link to="/contact" className="link">
          BOOK NOW ↗
        </Link>
      </Button>
    </header>
  );
};
