
const axios = require('axios');
const {Pais} = require('../db.js')


const ApiAccess= async()=>{
    try{
  const salida= await axios.get("https://restcountries.com/v3/all")
    
    const pais = salida.data.map(res => {
            return{
                        id: res.cca3,
                        nombre: res.name.common,
                        bandera: res.flags[0],
                        continente: res.continents[0],
                        capital: res.capital? res.capital[0]: 'No existe la capital del pais ingresado',
                        subregion: res.subregion,
                        area: res.area,
                        poblacion: res.population,}
  
                    })
                  if(!(await Pais.findByPk("ARM"))) {await Pais.bulkCreate(pais)}
    
    }
    catch(error){console.log(error)  }
  }
  

  module.exports = {
   ApiAccess
}