import axios from 'axios' 


export const CargarPaises = () =>{
    //const dispatch =useDispatch()
    return async (dispatch) =>{
        const salida = await axios('http://localhost:3001/countries/') 
        //console.log(salida.data.pais.rows)
        return dispatch({type:'CARGAR_PAISES', payload: salida.data.pais.rows})
    }
}



export const PaisesPorId= (id) =>{

    return async (dispatch) =>{
        try {
            const salida = await axios(`http://localhost:3001/countries/${id}`)
                
            return dispatch({type:'PAISES_POR_ID', payload: salida.data.country})
        } catch (error) {
            console.log(error)
        }
        

    }

}







export const PaisesPorNombre= (nombre) =>{
    return async (dispatch) =>{
        try {
            const salida = await axios(`http://localhost:3001/countries?nombre=${nombre}`)
        
        return dispatch({type:'PAISES_POR_NOMBRE', payload: salida.data.pais})
        
        } catch (error) {
            
            return alert('Ingresar un nombre válido de un país')
        }     

    }
}




export const NuevaActividad = (nombre, dificultad,duracion,temporada,pais) =>{
return async (dispatch)=>{
try{
const salida= await axios(`http://localhost:3001/activities/`,
{nombre, 
 dificultad,
 duracion,
 temporada,
 pais})

return dispatch({type:'NUEVA_ACTIVIDAD',payload:salida.data.nuevaActividad})

}
catch(error){
console.log(error)
}

}
}




export const TodasActividades= () =>{
    return async (dispatch) =>{
        try {
            const salida = await axios(`http://localhost:3001/`)//estaba/activities
         

        return dispatch({type:'CARGAR_TODAS_ACTIVIDADES', payload: salida.data.actividads})
      
        } catch (error) {
            console.log(error)
        }     

    }
}



export const filtroPorActividad = (nombre) =>(
    {
        type: 'PAISES_POR_ACTIVIDAD',
        payload : nombre
    }
)

export const filtroPorContinente = (payload) =>( {type: 'FILTRO_POR_CONTINENTE', payload } )



export const OrdenarPorPoblacionAsc = () =>( {type: 'ORDENAR_POR_POBLACION_ASC'} )

export const OrdenarPorPoblacionDesc = () =>( {type: 'ORDENAR_POR_POBLACION_DESC'} )

export const OrdenarPorLetraAsc = () =>(  {type:'ORDENAR_POR_LETRA_ASC'} )

export const OrdenarPorLetraDesc = () =>( {type:'ORDENAR_POR_LETRA_DESC' } )




/*export function getActivity(name) {
    return async function (dispatch) {
        return axios.get(`/activities/${name}`)
            .then((response) => {
                dispatch({
                    type: GET_ACTIVITY,
                    payload: response.data
                })
            })
    }
}
export function getAllActivities() {
    return async function (dispatch) {
        return axios.get(`/activities/`)
            .then((response) => {
                dispatch({
                    type: GET_ALL_ACTIVITIES,
                    payload: response.data
                })
            })
    }
}
export function postActivity(activity) {
    return async function (dispatch) {
        return axios.post(`/activities`, activity)
            .then((response) => {
                dispatch({
                    type: POST_ACTIVITY,
                    payload: response.data
                })
            })
    }
}*/