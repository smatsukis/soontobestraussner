import { NavLink } from 'react-router-dom';
import { useState } from "react";

export default function NavLinkCustom({ children, to, ...props }) {

    return (
        <NavLink
      to={to}
      className="font-minimal border border-stone-300 text-stone-300 hover:text-zinc-800 hover:bg-stone-300 py-2 px-4 rounded-sm transition-all aria-[current=page]:text-zinc-800 aria-[current=page]:bg-stone-300"

    >
      {children}
    </NavLink>
    );
  }