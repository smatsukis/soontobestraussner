import NavLinkCustom from "./NavLinkCustom";

function NavBar() {
  return (



    
 
      <div className="w-full gap-4 p-8 flex justify-center items-center text-center bg-zinc-800 font-minimal">
  
         
        
          <nav className="flex space-x-4 pt-2">
            <NavLinkCustom to="/">Home</NavLinkCustom>
            <NavLinkCustom to="/our-story">Our Story</NavLinkCustom>
            <NavLinkCustom to="/details">The Details</NavLinkCustom>
            <NavLinkCustom to="/rsvp">RSVP</NavLinkCustom>
          </nav>
        
      </div>

   
  );
}

export default NavBar;
