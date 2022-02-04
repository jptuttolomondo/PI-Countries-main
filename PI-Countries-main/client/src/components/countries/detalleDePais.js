import React, { useEffect} from 'react'
import {useParams } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'
import { PaisesPorId } from '../../actions/actions'
import { useSelector,useDispatch} from 'react-redux'
import "./detalleDePais.css"


export const DetalleDePais = () => {
 
 const { id} = useParams();

    const infopais = useSelector((state) => state.detallePaisInicial);
      //const aux=infopais.actividads[0].nombre
    //  console.log(aux)
    //const [currentPage, setCurrentPage] = useState(0);
 const dispatch=useDispatch()
   useEffect(() => {
      dispatch( PaisesPorId(id))
  }, [id]);

    return (
        <div className="DetalleDePais" > 
         <h1 >Detalle de informacion de pais</h1>
      <div className='bandera' ><img src ={infopais.bandera} width="150" height="100" alt='bandera'/></div>
      <div className="info" >
        <h3>País: {infopais.nombre}</h3> 
        <h4>Codigo 3 letras: {infopais.id}</h4>
          <h4>Capital: {infopais.capital}</h4>
          <h4>Continente: {infopais.continente}</h4>
          <h4>SubRegion: {infopais.subregion}</h4>
          <h4>Area: {infopais.area}</h4>
          <h4>Población: {infopais.poblacion}</h4>
         <h4>Actividades Turísticas: {
                        // infopais.map(e=>{
                        //   return (
                        //     <div> 
                        //       <h4>nombre: {e.actividads.nombre}</h4>
                        //     </div>
                        //   )
                        // })
                        
           } </h4> 
         
                     

         </div>
            <a href='/activity'><button >Agregar actividades turisticas a {infopais.nombre}</button></a>
           <a href='/home'><button >Volver a consultas por pais</button></a>
     </div>
    )

}

/* <input className='input' 
                    type='text' name='search' 
                    placeholder='Buscar Pais...' 
                    autoComplete='off'
                    value= {input.search}
                    onChange={handleSearch}/>







                         {infopais.map (e=>(<div><h5>{e.nombre} </h5>
        
       </div> ))}
                    */