import { useState } from 'react';
import './style.css';

function Header() {
  // isMenuOpen permet de savoir si le menu est ouvert ou non
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-6 flex bg-orange-500 text-white justify-between items-center text-lg ">
      <button
        className={
          isMenuOpen
            ? 'hamburger hamburger--elastic is-active'
            : 'hamburger hamburger--elastic'
        }
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <h1 className="font-bold">Question pour un bonbon !</h1>
    </div>
  );
}

export default Header;
