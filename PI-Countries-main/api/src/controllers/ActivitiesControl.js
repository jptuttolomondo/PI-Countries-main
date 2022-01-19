const { response } = require('express')
const { Actividad, Pais } = require('../db')


const addActivity= async(req, res=response) =>{
    const {nombre,dificultad,duracion,temporada,countries}=req.body

    try {
        if(nombre,dificultad,duracion,temporada,countries){
            const nuevaActividad = await Actividad.create({ nombre,dificultad,duracion,temporada})
            countries.map((country) => nuevaActividad.addPais(country))
            res.json({
                ok:true,
                nuevaActividad})
        }

        else {
            res.status(400).json({
                ok: false,
                msg: 'Missing Data'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
    Actividad.count().then(c => {
        console.log("Hay " + c + " actividades")
      })
}


module.exports = {
    addActivity
}