// import { useDispatch } from "react-redux"



// export const ordAlfa = (a , b) =>{
//     if(a.nombre< b.nombre) return -1
//     if(b.nombre < a.nombre) return 1 
//     return 0
// }

// export const ordPob = (a, b) =>{
   
//     return a.poblacion - b.poblacion
// }

// export const orderBy = function (params) {
//     return function (dispatch) {
//       dispatch({
//         type: "ORDER_BY",
//         payload: params
//       })
//     }
// }


// export default function Orderby() {
//     const dispatch = useDispatch();

//     const handleOrder = (e) => {
//         switch (e.target.value) {
          
//             case "A-Z": dispatch(orderBy((a, b) => { return a.nombre.toUpperCase() < b.nombre.toUpperCase() ? -1 : 1 })); break
//             case "Z-A": dispatch(orderBy((a, b) => { return b.nombre.toUpperCase() < a.nombre.toUpperCase() ? -1 : 1 })); break
//             case "↑ population": dispatch(orderBy((a, b) => b.poblacion - a.poblacion)); break
//             case "↓ population": dispatch(orderBy((a, b) => a.poblacion - b.poblacion)); break
//             default: break
//         }
//     };

//     return (
//         <div>
//             <h5 >Order by:</h5>
//             <form>
//                 <select  name="Order" onChange={handleOrder} >
//                     <option value="Ascendant">Ascendant</option>
//                     <option value="Descendant">Descendant</option>
//                     <option value="A-Z">Alphabetically A-Z</option>
//                     <option value="Z-A">Alphabetically Z-A</option>
//                     <option value="Higher">Higher Rating </option>
//                     <option value="Lower">Lower Rating</option>
//                 </select>
//             </form>
//         </div>
//     )
// }; 