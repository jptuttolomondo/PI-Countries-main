const { response } = require('express')
const { Actividad, Pais } = require('../db')


const addActivity= async(req, res=response) =>{
    const {nombre,dificultad,duracion,temporada,pais}=req.body //el post es sobre ruta http://localhost:3001/activities

   // try {
        //if(nombre,dificultad,duracion,temporada,countries){
            const nuevaActividad = await Actividad.create({ nombre,dificultad,duracion,temporada})
            let activPaises= await Pais.findAll({
                where: {nombre:pais}
            })
            nuevaActividad?.addPais(activPaises);
            res.send('actividad creada')
            //ver si esta repetido no se agrega
          // countries.map((country) => nuevaActividad.addPais(country))

            // res.json({
            //     ok:true,
            //     nuevaActividad})
        }

    //     else {
    //         res.status(400).json({
    //             ok: false,
    //             msg: 'Missing Data'
    //         })
    //     }
        
    // } catch (error) {
    //     res.status(500).json({
    //         ok: false,
    //         msg: 'Error connecting to the database'
    //     })
    // }
    // Actividad.count().then(c => {
    //     console.log("Hay " + c + " actividades")
    //   })



const getAllActivities= async (req, res=response) =>{

try{
const activities= await Actividad.findAll()
console.log(activities)
res.json({
    ok:true,
    activities})
}
catch (error){
console.log(error)
}
}

module.exports = {
    addActivity,
    getAllActivities
}