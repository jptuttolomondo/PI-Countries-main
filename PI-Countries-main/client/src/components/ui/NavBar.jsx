import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'
import './NavBar.css';

export default function NavBar() {
    return (
        <React.Fragment>
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
/*class Nav extends Component {

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/house/create">Create House</Link>
            </div>
        );
    };
};

export default Nav;
*/