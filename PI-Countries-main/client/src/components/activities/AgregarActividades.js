import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
// { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CargarPaises,NuevaActividad, TodasActividades } from '../../actions/actions'
import './Actividades.css'
import {validate} from '../../utils/index'
export const AgregarActividades= () => {
   
 //const { id} = useParams();
 const dispatch=useDispatch()
 const allCountries=useSelector((state)=>state.copiaDePaises);
 //const infopais = useSelector((state) => state.detallePaisInicial);
const [input, setInput]= useState({
    nombre:'',
    dificultad: '',
    duracion:'',
    temporada: '',
  pais: []
    })

    
    useEffect(() => {
      dispatch(CargarPaises());
  }, [dispatch])

  
  useEffect(() => {
    dispatch(TodasActividades());
}, [dispatch])

const seleccionarPais=(e)=>{
 
    setInput({...input, pais: [...input.pais,e.target.value] });
  
}

 
    return (
        <div className="AgregarActividad" >  
            <h1>Agregar actividades turísticas  </h1>
            <form onSubmit={(e) => {
                     e.preventDefault();
                     }}>
                      <div >
                        <p>Seleccionar Pais : 
                  <select onChange={(e)=>seleccionarPais(e)} name='pais'   >
                        {allCountries.map((e)=>(
                       <option value={e.nombre} key={e.id}>{e.nombre}</option>
                        ))}
                      </select>

                      </p>

                      </div>
                    

                       <p> Nombre Actividad:      
                         <input
                          type="text"
                         placeholder="nombreActividad"
                         value= {input.nombre}
                         onChange={e => setInput(e.target.value)}
                           />
                         </p>
                        <p> Nivel de dificultad (1 a 5): 
                        <select name='dificultad' onChange={(e) =>setInput({...input,dificultad:e.target.value})}  >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                       </p>
                      
                       <p> Duración (en horas): 
                         <input
                          type="text"
                         placeholder="duracion"
                         value={input.duracion}
                         onChange={e => setInput(e.target.value)}
                           />
                         </p>

                       <p> Temporadas Habilitadas : 
                        <select name='temporada' onChange={(e) => setInput({...input,temporada:e.target.value})}  >
                        <option value="Summer">Summer</option>
                          <option value="Spring">Spring</option>
                          <option value="Autumn">Autumn</option>
                          <option value="Winter">Winter</option>
                        </select>
                       </p>
                         
                      
                       <input type="submit" value="Agregar" 
                          onClick={()=>dispatch(NuevaActividad(input.nombre,input.dificultad,input.duracion,input.temporada,input.pais))}/>
                     </form>
               <a href='/home'><button >Volver a consultas por pais</button></a>
        </div>
    )
}


/*    <select onChange={(e)=>seleccionarPais(e)} name='pais'>
                        {allCountries.map((e)=>(
                       <option value={e.nombre} >{e.nombre}</option>
                        ))}
                      </select>
*/


 /*return (
        <div className="container">  
  <form onSubmit={handleSubmit}>
    <div>
    <div>
    <h1>Crear Nueva Actividad</h1>
    
    
    <input placeholder="name" 
    type="text" 
    className={error.name&& 'danger'}
    value= {input.name} 
    name={'name'} 
    onChange={handleInputChange} />
    {error.name && (
           <p className="danger">{error.name}</p>
    )}

      <select name={'country'} 
      onChange={handleSelect} 
      required>
      <option value="">pais</option>
      {countries.length?.map(country => (<option value={country.id} key={country.id}>{country.name}</option>))}
                        
       </select>
       {input.countriesS?.map(c=>(<p key={c}>{c}</p>))}

       <input 
       name={'duration'} 
       value={input.duracion}
       onChange={handleInputChange}
       className={error.duration&& 'danger'}
       />
       <span>horas</span>
       {error.duracion && (
           <p className="danger">{error.duracion}</p>
    )}

        <select name={'difficulty'} 
       onChange={handleInputChange} 
       required>
        <option value="">Dificulty</option>
        {arrDifficulty.map(difficulty => (<option value={difficulty} key={difficulty}>{difficulty}</option>))}
       </select>

        <select 
       name={'season'} 
       onChange={handleInputChange} 
       required>
       <option value="">Season</option>
        {arrSeason.map(season => (<option value={season} key={season}>{season}</option>))}
       </select>
        {error.name || error.duration 
        ? null 
        : <button name="submit" type="submit">Aceptar</button> }
      
    </div>
    <div>
        <h1>Description</h1>
    </div>
    </div>
    
    
  </form>
</div>
    )
}
*/