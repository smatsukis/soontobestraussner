import NavLinkCustom from "./NavLinkCustom";

function NavBar() {
  return (



    
 
      <div className="w-full lg:gap-4 xl:gap-4 lg:px-8 xl:px-8 px-1 py-8 flex justify-center items-center text-center bg-white font-minimal">
  
         
        
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
