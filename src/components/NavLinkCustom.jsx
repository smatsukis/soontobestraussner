import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function NavLinkCustom({ children, to, ...props }) {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="relative">
      {window.location.pathname === to && (
        <img
          src="/daisy.png"
          alt="Daisy"
          className="absolute -top-6 -left-2 w-8 h-8 z-10"
        />
      )}
      <NavLink
        to={to}
        {...props}
        className={`font-paragraph border border-champagne text-champagne hover:text-zinc-800 hover:bg-champagne py-2 lg:px-4 xl:px-4 px-2 rounded-sm transition-all relative z-0 aria-[current=page]:text-zinc-800 aria-[current=page]:bg-champagne`}
      >
        {children}
      </NavLink>
    </div>
  );
}
