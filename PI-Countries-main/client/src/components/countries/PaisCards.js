import React from "react";
import { useState,useEffect } from "react";
import {useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { CargarPaises } from "../../actions/actions";
import "./PaisCards.css";


export const PaisCards=({onClose})=>{
  
    const countries = useSelector((state) => state.paisesInicial);
    const [currentPage, setCurrentPage] = useState(0);
    const paisfiltrado= useSelector((state)=>state.detallePaisInicial)
const continente=useSelector((state)=>state.paisesActivos)

// const actualState=paisfiltrado.length<=0 &&continente.length<=0&&continente.length<=0 ? countries
//                : continente;
                                     
const actualState=paisfiltrado.length<=0 &&continente.length<=0 ? countries
                : continente.length>0?continente
                                     : paisfiltrado;


  
const dispatch=useDispatch()
useEffect(()=>{firstPage()
dispatch(CargarPaises())},[dispatch],actualState
)
//iba countries

//este daa error de cambio 
//ded tamaño. si saco countries no anda. consultar !!!
//consultar los warnings dee hooks!!!


    let nextPage = () => {
        if (actualState.length <= currentPage + 10) {
          setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10);
      };
      let prevPage = () => {
        if (currentPage < 9) {
          setCurrentPage(0);
        } else {

          setCurrentPage(currentPage - 10);
        }
      };

      const firstPage = () => {
        
        setCurrentPage(0);
      };
    
      const lastPage = () => {
   
        setCurrentPage(actualState.length - 10);
         console.log(currentPage);
      };
      const filteredC = actualState.slice(currentPage, currentPage +10)
       const filteredCFirst= actualState.slice(currentPage, currentPage + 9)              
    
    return (
<div>   
    <div className="cards"> 
         <button onClick={firstPage}>  {'<<Primera Pagina'}  </button>
        <button onClick={prevPage} >  {'<Anterior'}   </button>
        <button onClick={nextPage} >  {'>Siguiente'}   </button>
        <button onClick={lastPage} >  {'>> Ultimo'}</button>
     </div>
     <div className="containerCard">

       { currentPage===0 ? 
       
       filteredCFirst.map (e=>(

       <div className="paiscards" key={e.id}> 
             
            <div>    
          <h3>Pais: {e.nombre}</h3> 
          <h4>Continente:  {e.continente}</h4>
          </div>
          <div> 
          <NavLink to={`/${e.id}`}>< img src= {e.bandera} width="150" height="100" alt="bandera"/>   </NavLink> 
        </div>
      </div>
                              ))
        :filteredC.map (e=>(
        <div className="paiscards"key={e.id}> 
            
              <h3>Pais: {e.nombre}</h3> 
               <h4>Continente:  {e.continente}</h4>
               <NavLink to={`/${e.id}`}>< img src= {e.bandera} width="150" height="100" alt="bandera"/>   </NavLink> 
            </div> ))
            }

     </div>

</div> 
    )
}




