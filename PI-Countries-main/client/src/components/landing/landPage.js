import React from 'react'
import { NavBarLanding } from '../landing/NavBarLanding'
import './landing.css'
import style from './landing.css'
export const LandingPage = () => {

  
    return (
        <div>
        <div className={style.land}>
        <h1>Información de países y actividades Turísticas</h1>
        
         <NavBarLanding/>
         <br></br>
         <br></br>
           </div>  
         <footer className={style.pie}>Proyecto individual:  Juan Pablo Tuttolomondo</footer>
   

         
       

       
</div>
        )
}
