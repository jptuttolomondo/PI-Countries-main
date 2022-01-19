const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
return sequelize.define('actividad',{
    
    //idActiv:{type: DataTypes.INTEGER, primaryKey: true },
     nombre:{type:DataTypes.STRING, allowNull: false},
     dificultad:{type:DataTypes.ENUM('1','2','3','4','5'), allowNull: false },
     duracion:{type: DataTypes.INTEGER,allowNull: false},
     temporada:{type:DataTypes.ENUM('Spring','Summer','Autumn','Winter'),allowNull: true,},
     //idPais:{type:DataTypes.STRING, allowNull: false}


    
    }
    ,{ timestamps: false },
    )
    }