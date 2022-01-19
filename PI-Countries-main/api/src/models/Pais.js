const { DataTypes} = require('sequelize');


module.exports = (sequelize) => {
    // defino el modelo
    return sequelize.define('pais', {
      id: {type:DataTypes.STRING(3), allowNull: false, primaryKey: true },
      nombre: {type:DataTypes.STRING, allowNull: false },
      bandera: {type:DataTypes.STRING, allowNull: false },
      continente: {type:DataTypes.STRING, allowNull: false },
      capital: {type:DataTypes.STRING, allowNull: false },
      subregion: {type:DataTypes.STRING },
      area: {type: DataTypes.DOUBLE },
      poblacion: {type: DataTypes.INTEGER }
    }
    
    ,{ timestamps: false },
    );
}
