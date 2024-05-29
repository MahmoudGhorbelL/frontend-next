'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useRouter } from 'next/navigation'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from "./shoppingCart/cartModal";
import { useShoppingCart } from "use-shopping-cart";
import React from 'react';

const Menu = () => {
    const { handleCartClick, cartCount } = useShoppingCart();
    const router = useRouter()
    const { data: session } = useSession()
    return (
        <>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg  ">
                        
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >

                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link pl-lg-0" href="">
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        Categories
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        {" "}
                                        Blog{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        Contact Us
                                    </a>
                                </li>
                                {session ? <Nav.Link onClick={() => signOut()}><LogoutIcon />Se déconnecter</Nav.Link>
                                    : <Nav.Link onClick={() => signIn()}><AccountCircleIcon />Se connecter</Nav.Link>
                                }
                                <li className="nav-item">
                                    <Nav.Link onClick={() => router.push('/client/cartProducts')}>
                                        <ShoppingBasketIcon style={{ color: 'pink' }} />
                                        Shopping Cart
                                    </Nav.Link>
                                </li>
                                
                            <button className="relative" onClick={() => handleCartClick()}>
                                <ShoppingCartIcon color="primary" />
                                <div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                                    {cartCount}
                                </div>
                            </button>
                            <CartModal />
                            </ul>
                            <from className="search_form">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search here..."
                                />
                                <button className="" type="submit">
                                    <i className="fa fa-search" aria-hidden="true" />
                                </button>
                            </from>
                        </div>
                    </nav>
                </div >
            </header >
        </>
    );
}
export default Menu;