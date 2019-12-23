module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        }
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
  },{ 
    getterMethods:{
      getFullName:()=>{
        return `${this.firstName} ${this.lastName}`;
      }
  }
});

//   User.associate = function(models) {
//     models.User.hasMany(models.Task);
//   };

  return User;
};