import { Link } from 'react-router-dom'
import Style from './style.module.css'
import logo from "../../assets/logo.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { catagories } from '../../contant';
import { useEffect, useState } from 'react';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(0, 0, 0, 0.87)',
        backdropFilter: "blur(5px)",
        maxWidth: 250,
        fontSize: theme.typography.pxToRem(12),
    },
}));

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    return (
        <nav className={scrolled ? `${Style.navbar_container} ${Style.scrolled}` : Style.navbar_container}>
            <div className={Style.logo_container}>
                <Link to="/">
                    <img src={logo} alt="logo" width="100%" />
                </Link>
            </div>

            <div className={Style.manu_burgur}>
                <MenuIcon />
            </div>
            <ul className={`${Style.menu_bar} flex space-x-4 gap-10 items-center`}>
                <li>
                    <Link to="/">Home</Link>
                    <div className={Style.borderBottom}></div>

                </li>
                <li className='flex items-center'>
                    <HtmlTooltip
                        title={
                            <>
                                <ul className={Style.list_product}>
                                    {catagories.map((product, index) => (
                                        <li key={index}>
                                            <Link to={product.path} className={Style.product_name}>{product.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        }
                    >
                        <Link to="/products">Products</Link>
                        <IconButton size='small' sx={{ padding: 0 }}
                        >
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
            </ul>

        </nav>
    )
}

export default Navbar
