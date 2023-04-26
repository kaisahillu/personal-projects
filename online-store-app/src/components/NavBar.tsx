import '../styles/NavBar.css'
import UserLogo from '../images/user.png'
import ShoppingBagLogo from '../images/shopping-bag.png'
import FavoriteLogo from '../images/favorite-icon.png'
import { Link } from 'react-router-dom'

export function NavBar(){
    return (
        <div className="nav-bar">
            <Link className='text-link' to="/" >Home</Link>
            <Link className='text-link' to="/about">About Us</Link>
            <Link className='text-link' to="/information">Q & A</Link>
            <Link className='text-link' to="/contact">Contact</Link>
            
            <img src={FavoriteLogo} alt='search' onClick={() => {}}/>
            <img src={UserLogo} alt='search' onClick={() => {}}/>
            <img src={ShoppingBagLogo} alt='search' onClick={() => {}}/>
        </div>
    )
}