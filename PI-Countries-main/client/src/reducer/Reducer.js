

const EstadoInicial = {
    paisesInicial : [],
    detallePaisInicial:[],
    paisesActivos:[],
    actividadesInicial:{},
    todasActividadesInicial:[],
    copiaDePaises:[]
  }
export const ReducerTotal = (state=EstadoInicial,action)=>{

switch(action.type){

case 'CARGAR_PAISES':return{...state,paisesInicial:action.payload,
                          copiaDePaises:action.payload}

case'PAISES_POR_ID':return{...state,detallePaisInicial:action.payload}

case'PAISES_POR_NOMBRE':return{ ...state, detallePaisInicial:action.payload }



case 'FILTRO_POR_CONTINENTE':return{ ...state, 
  paisesActivos:state.paisesInicial.filter((c)=>
  typeof(c.continente)==='string' ? c.continente.includes(action.payload) 
                                  : c.continente.includes(action.payload))}

  



case'NUEVA_ACTIVIDAD':return{...state,actividadesInicial:action.payload,
  todasActividadesInicial: state.todasActividadesInicial.concat(action.payload)}

case 'CARGAR_TODAS_ACTIVIDADES': return{...state,todasActividadesInicial:action.payload}



case 'ORDENAR_POR_POBLACION_ASC':  
// let score = [...state.copiaDePaises ]
// const orderScore= action.payload==="a-z"?
//       score.sort(function(a,b){
// if (a.poblacion>b.poblacion){
//   return -1

// }if (b.poblacion>a.poblacion){
//   return 1
// }

// return 0
//       }): 
//       score.sort(function (a,b){
//         if (a.poblacion>b.poblacion){
//           return 1
//         }
//         if (b.poblacion>a.poblacion){
//           return -1
//         }
//         return 0
//       })
//       return{  
//         ...state,
//         paisesInicial:orderScore
//       }

// if(state.copiaDePaises.length<=0) //{state.paisesActivos=state.paisesInicial}

// return{...state,paisesActivos:state.paisesInicial.sort((a, b) => (
//   a.poblacion > b.poblacion ? 1 : a.poblacion < b.poblacion ? -1 : 0)
// )}

 //else 
 return {...state,paisesActivos: state.copiaDePaises.sort((a, b) => (
  a.poblacion > b.poblacion ? 1 : a.poblacion < b.poblacion ? -1 : 0)
)
 }



 case 'ORDENAR_POR_POBLACION_DESC'://if(state.copiaDePaises.length<=0) 
// return{...state,paisesActivos:state.paisesInicial.sort((a, b) => (
//   a.poblacion < b.poblacion ? 1 : a.poblacion > b.poblacion ? -1 : 0)
// )}
                             
//else
 return {
  ...state,
paisesActivos: state.paisesInicial.sort((a, b) => (
   a.poblacion < b.poblacion ? 1 : a.poblacion > b.poblacion ? -1 : 0)
 )

}


case 'ORDENAR_POR_LETRA_ASC': if(state.paisesActivos.length<=0) return{...state,paisesActivos:state.paisesInicial.sort((a, b) => (
  a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0)
)}
else                            
return {
  ...state,
paisesActivos: state.paisesActivos.sort((a, b) => (
   a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0)
 )

}

case 'ORDENAR_POR_LETRA_DESC':if(state.paisesActivos.length<=0) return{...state,paisesActivos:state.paisesInicial.sort((a, b) => (
  a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0)
)}
  return {...state,

  paisesActivos: state.paisesActivos.sort((a, b) => (
    a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0)
  )
 

}




default: return {...state} 

}

}


