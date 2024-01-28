import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function NavLinkCustom({ children, to, ...props }) {
  const [activeLink, setActiveLink] = useState(null);

  console.log(window.location.pathname);

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
        className={`font-minimal border border-stone-300 text-stone-300 hover:text-zinc-800 hover:bg-stone-300 py-2 px-4 rounded-sm transition-all relative z-0 aria-[current=page]:text-zinc-800 aria-[current=page]:bg-stone-300`}
      >
        {children}
      </NavLink>
    </div>
  );
}
