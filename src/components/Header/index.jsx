import {
  Avatar,
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import Brand from "@/elements/Brand";
import ThemeSwitcherButton from "@/elements/ThemeSwitcherButton";
import { useLocation } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useContext } from "react";
import { AuthContext } from "@/providers";
import { logout } from "@/libs/reducers/auth/action";

export default function Header() {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { state, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <Navbar className="w-full dark:bg-inherit bg-gray-50 shadow-md dark:shadow-none">
      <NavbarBrand className="gap-2" as={Link} href="/">
        <Brand />
        <h1 className="font-bold">IZEAHUNIVERSE</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem isActive={pathname === "/"}>
          <Link href="/" color={pathname === "/" ? "foreground" : ""}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link href="/about" color={pathname === "/about" ? "foreground" : ""}>
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <ThemeSwitcherButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-2" justify="end">
        {state?.isLoggedIn ? (
          <NavbarItem>
            <Popover showArrow placement="bottom" backdrop="blur">
              <PopoverTrigger>
                <Avatar
                  className="cursor-pointer"
                  isBordered
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              </PopoverTrigger>
              <PopoverContent>
                <div className="p-2">
                  <h1 className="text-medium font-bold mb-4">
                    Hi, {state?.username ?? "Admin"}
                  </h1>
                  <Button fullWidth onClick={handleLogout}>
                    Sign Out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button color="primary" variant="solid" onClick={onOpen}>
              Sign In
            </Button>
            <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
