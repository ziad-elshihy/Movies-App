import { Navbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   // eslint-disable-next-line no-unused-vars
   const [isActive, setIsActive] = useState(true);
   const menuItems = [
      "Home",
      "Watch list",
      "Watched"
   ];
   return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
         <NavbarContent>
            <NavbarMenuToggle
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
               className="sm:hidden"
            />
            <NavbarBrand>
               <AcmeLogo />
               <p className="font-bold text-inherit">Movies</p>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem className={isActive && "text-blue-500 font-medium"}>
               <Link aria-current="page" to="/">
                  Home
               </Link>
            </NavbarItem>
            <NavbarItem >
               <Link to="/watchlist" >
                  Watch list
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Link  to="/watched">
                  Watched
               </Link>
            </NavbarItem>
         </NavbarContent>
         <NavbarContent justify="end">
            <NavbarItem>
               <Button as={Link} color="primary" to="/search" variant="flat">
                  Search
               </Button>
            </NavbarItem>
         </NavbarContent>
         <NavbarMenu>
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                     color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                     }
                     className="w-full"
                     href="#"
                     size="lg"
                  >
                     {item}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   );
}

export default NavBar
