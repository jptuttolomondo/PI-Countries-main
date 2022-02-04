const { salida } = require('express')
const {Actividad, Pais} = require('../db')
const { Op } = require('sequelize')
const { ApiAccess } = require('../helpers/AccesoApi')


const getCountries= async(req, res=salida) =>{
    const cuentapaises= await Pais.count()
    if(!cuentapaises){
        await ApiAccess()
    }
        const {nombre} = req.query

        try {

            if(nombre){
                const pais = await Pais.findAll({
                    where : {
                       nombre: {
                           [Op.iLike]: `${nombre}%`
                           }
                       }
                   })
                if(pais.length===0){
                    return res.status(404).json({
                        ok:false,
                        msg: `No existe un pais con el nombre ${nombre}`
                    })
                }
                return res.json({
                    ok:true,
                    pais
                })
            }

            else{

                const {page=0, size=250} = req.query
                const pais = await Pais.findAndCountAll({ 
                limit: size,
                offset: page*size
                })
                return res.json({
                    ok:true,
                    pais
                })
            }       
        
        }

        catch (error) {
            res.status(500).json({
                ok: false,
                msg: 'Error connecting to the database'
            })
        }

}
            


const getCountryById= async( req, res= response) => {

    const {id} = req.params
    try {
        
        const country = await Pais.findByPk(id.toUpperCase(),{
            include: [
                {
                    model: Actividad,
                    attributes:  ["nombre", "dificultad", "duracion", "temporada"],
                    through: {
                        attributes: [],
                    }
                }
            ]
        })
        if(!country){
            
            return res.status(404).json({
                ok:false,
                msg: `No existe un pais con id:  ${id}`
            })
        }
        res.json({
            ok:true,
            country
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
        
    }
}




module.exports = {
    getCountries,
    getCountryById,
}