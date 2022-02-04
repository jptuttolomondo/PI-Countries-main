import React, { useEffect} from 'react'

import {PaisesPorNombre } from '../../actions/actions'
import { useSelector,useDispatch} from 'react-redux'



export const PaisesPorContinente=(continente)=>{
    
const dispatch=useDispatch()

useEffect(() => {
  dispatch(filtroPorContinente(continente))
}, [continente]);
const infopais = useSelector((state) => state.detallePaisInicial);///ver estado!!



return (
    <div className="DetalleDePais" key={infopais.id}> 
     <h1 >Detalle de informacion de pais</h1>
  <div className='bandera' ><img src ={infopais.bandera} width="150" height="100" alt='bandera'/></div>
  <div className="info" >

      <h4>País: {infopais.nombre}</h4>
      <h4>Capital: {infopais.capital}</h4>
      <h4>Continente: {infopais.continente}</h4>
      <h4>SubRegion: {infopais.subregion}</h4>
      <h4>Area: {infopais.area}</h4>
      <h4>Población: {infopais.poblacion}</h4>
      <h4>Actividades Turísticas: {infopais.actividads}</h4>  
     </div>
        
       <a href='/home'><button >Volver a consultas por pais</button></a>
 </div>
)

}
