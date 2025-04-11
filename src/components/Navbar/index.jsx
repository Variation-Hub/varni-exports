import { Link } from "react-router-dom";
import Style from "./style.module.css";
import logo from "../../assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
// import MailIcon from "@mui/icons-material/Mail";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
// import MenuIcon from './MenuIconComponent';
import { catagories } from "../../contant";
import { useEffect, useState } from "react";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "rgba(0, 0, 0, 0.87)",
    backdropFilter: "blur(5px)",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
  },
}));

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        autoDisplay: false,
        pageLanguage: "en",
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const routes = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Certificates", path: "/certificates" },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {routes.map((route, index) => (
          <ListItem key={route.label} disablePadding>
            <Link to={route.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemButton>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        scrolled
          ? `${Style.navbar_container} ${Style.scrolled}`
          : Style.navbar_container
      }
    >
      <div className={Style.logo_container}>
        <Link to="/">
          <img src={logo} alt="logo" width="100%" />
        </Link>
      </div>

      <div className={Style.manu_burgur} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <ul className={`${Style.menu_bar} flex space-x-4 gap-10 items-center`}>
        <li>
          <Link to="/">Home</Link>
          <div className={Style.borderBottom}></div>
        </li>
        <li className="flex items-center">
          <HtmlTooltip
            title={
              <>
                <ul className={Style.list_product}>
                  {catagories.map((product, index) => (
                    <li key={index}>
                      <Link to={product.path} className={Style.product_name}>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            }
          >
            <Link to="/products">Products</Link>
            <IconButton size="small" sx={{ padding: 0 }}>
              <ArrowDropDownIcon />
            </IconButton>
            <div className={Style.borderBottom}></div>
          </HtmlTooltip>
        </li>
        <li>
          <Link to="/certificates">Certificates</Link>
          <div className={Style.borderBottom}></div>
        </li>
        <li>
          <Link to="/about">About</Link>
          <div className={Style.borderBottom}></div>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
          <div className={Style.borderBottom}></div>
        </li>
        <li>
          <div id="google_translate_element" style={{ borderBottom: "1px solid lightgray", padding: 0, fontSize: "14px", width: "150px" }}></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
