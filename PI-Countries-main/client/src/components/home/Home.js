import React, { useEffect } from 'react'
 import { useDispatch} from 'react-redux'
import { CargarPaises} from '../../actions/actions'
import { NavBar } from '../ui/NavBar'
import {PaisCards}from '../countries/PaisCards'
import SearchBar from '../ui/SearchBar'
import "./Home.css"

export const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CargarPaises());
  }, [dispatch]);

    return (
<div >
    <div className='head' >   
    <div className='home'>
        <NavBar />
        <SearchBar  />
        <div > 
      <PaisCards/>
      
        </div>
      </div>

    </div>
</div>
      
    )
}

