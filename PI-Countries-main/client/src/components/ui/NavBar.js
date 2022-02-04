import React  from 'react'
//import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

//import { countriesByName, getAllCountries } from '../../actions/actions';
export const NavBar = ({setCurrentPage}) => {

   
    return (
        <React.Fragment>
      <nav>
            <ul className='barra'>
                <li className='enlinea' ><NavLink to= {'/Home'}>buscar informacion de paises</NavLink></li>
                <li className='enlinea'><NavLink to= {'/activity' }>Agregar actividades por pais</NavLink></li>
                <li className='enlinea'><NavLink to= {'/:id'}>informacion de un pais</NavLink></li>
                <li className='enlinea'><NavLink to= {'/'}>Volver a Inicio</NavLink></li>

            </ul>

            </nav>
          
          
        </React.Fragment>
    )
}