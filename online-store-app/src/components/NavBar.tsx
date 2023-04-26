import '../styles/NavBar.css'
import ShoppingCart from '../images/ShoppingCart.svg'
import UserLogo from '../images/user.png'
import ShoppingBagLogo from '../images/shopping-bag.png'
import FavoriteLogo from '../images/favorite-icon.png'

export function NavBar(){
    return (
        <div className="nav-bar">
            <h2>Home</h2>
            <h2>About Us</h2>
            <h2>Q & A</h2>
            <h2>Contact</h2>
            <img src={FavoriteLogo} alt='search' onClick={() => {}}/>
            <img src={UserLogo} alt='search' onClick={() => {}}/>
            <img src={ShoppingBagLogo} alt='search' onClick={() => {}}/>
        </div>
    )
}