import React, {useState} from "react";
import { Link } from "react-router-dom";
import './styles/Header.css'

export default function Header(){

    const[open, setOpen]=useState(false)
    
    function openMenu(){
        const html= document.documentElement
        setOpen(open=> !open)
        
        if(open){
            html.style.overflowY='scroll'
        }else{
            html.style.overflow='hidden'
        }
    }

    return(
        <>
        <header>
          <Link to='/' className="logo">TESLA</Link>
          <nav className="main-menu">
                <Link to="/model3">Model 3</Link>
                <Link to="/modely">Model y</Link>
                <Link to="/models">Model s</Link>
                <Link to="/modelx">Model x</Link>
                <Link to="/solarroof">Solar Roof</Link>
                <Link to="/solarpanel">Solar Panel</Link>
          </nav>
          <nav className="shop-account-menu">
              <Link id="shop">Shop</Link>
              <Link id="account">Account</Link>
              <Link onClick={openMenu}>Menu</Link>
          </nav>
        </header>
        <div id="backDrop" style={{display: open ? 'block' : 'none'}} onClick={openMenu}></div>
        <aside id="menuHomepage" style={{right: open ? '0' : '-294px'}}>
            <button id="closemenu" onClick={openMenu}>&times;</button>
            <div className="ocultMenu">
                <Link to="/model3">Model 3</Link>
                <Link to="/modely">Model y</Link>
                <Link to="/models">Model s</Link>
                <Link to="/modelx">Model x</Link>
                <Link to="/solarroof">Solar Roof</Link>
                <Link to="/solarpanel">Solar Panel</Link>
            </div>
            <Link className="optionMenu">Existing Inventory</Link>
            <Link className="optionMenu">Used Inventory</Link>
            <Link className="optionMenu">Trade-In</Link>
            <Link className="optionMenu">Demo Drive</Link>
            <Link className="optionMenu">Insurance</Link>
            <Link className="optionMenu">Cybertruck</Link>
            <Link className="optionMenu">Roadster</Link>
            <Link className="optionMenu">Semi</Link>
            <Link className="optionMenu">Charging</Link>
            <Link className="optionMenu">Commercial Energy</Link>
            <Link className="optionMenu">Utilities</Link>
            <Link className="optionMenu">Find Us</Link>
            <Link className="optionMenu">Support</Link>
            <Link className="optionMenu">Investor Relations</Link>
            <Link className="optionMenu">United States</Link>
        </aside>
        </>
        
    )
}