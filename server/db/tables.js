const {Sequelize, DataTypes, Model} = require("sequelize")
const sequelize = require('./db_connect')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    login:{type:DataTypes.STRING,unique:true, allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, unique:true},
    address:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"client"}
})

const Driver_License = sequelize.define('driver license',{
    id_user:{type:DataTypes.INTEGER, primaryKey:true, references:{
        model:'users',
        key:'id'
    }},
    serial:{type:DataTypes.STRING, primaryKey:true},
    number:{type:DataTypes.STRING, primaryKey:true},
    surname:{type:DataTypes.STRING, allowNull:false},
    name:{type:DataTypes.STRING, allowNull:false},
    lastname:{type:DataTypes.STRING},
    birthday:{type:DataTypes.DATE, allowNull:false},
    birthplace:{type:DataTypes.TEXT, allowNull:false},
    date_of_issue:{type:DataTypes.DATE, allowNull:false},
    expired:{type:DataTypes.DATE, allowNull:false},
    registration_address:{type:DataTypes.STRING, allowNull:false},
    categories:{type:DataTypes.STRING, allowNull:false}
})

const Bank_card = sequelize.define('bank card',{
    id_user:{type:DataTypes.INTEGER, primaryKey:true, references:{
        model:"users",
        key:"id"
    }},
    number:{type:DataTypes.STRING, primaryKey:true, allowNull:false},
    expired:{type:DataTypes.DATE, allowNull:false},
    cvv:{type:DataTypes.INTEGER, allowNull:false}
})

const Auto = sequelize.define('auto',{
    registry_number:{type:DataTypes.STRING, primaryKey:true},
    car_type:{type:DataTypes.STRING, allowNull:false},
    brand:{type:DataTypes.STRING, allowNull:false},
    model:{type:DataTypes.STRING, allowNull:false},
    generation:{type:DataTypes.INTEGER},
    horsepower:{type:DataTypes.INTEGER, allowNull:false},
    commisioning_year:{type:DataTypes.INTEGER, allowNull:false},
    release_year:{type:DataTypes.INTEGER, allowNull:false},
    steer:{type:DataTypes.STRING, allowNull:false},
    equipment:{type:DataTypes.STRING},
    fuel:{type:DataTypes.STRING, allowNull:false},
    fuel_consumption_per100km:{type:DataTypes.DECIMAL(10,2), allowNull:false},
    mileage:{type:DataTypes.INTEGER, allowNull:false},
    drive_type:{type:DataTypes.STRING, allowNull:false},
    engine:{type:DataTypes.STRING, allowNull:false},
    transmission:{type:DataTypes.STRING, allowNull:false},
    seats:{type:DataTypes.INTEGER},
    hourly_rate:{type:DataTypes.INTEGER, allowNull:false},
    daily_rate:{type:DataTypes.INTEGER, allowNull:false},
    address:{type:DataTypes.STRING},
    status:{type:DataTypes.STRING}
})

const Booking = sequelize.define('booking',{
    id_user:{type:DataTypes.INTEGER, primaryKey:true, references:{
        model:'users',
        key:'id'
    }},
    auto_registry_number:{type:DataTypes.STRING, primaryKey:true, references:{
        model:'autos',
        key:'registry_number'
    }},
    rent_start:{type:DataTypes.DATE, primaryKey:true, allowNull:false},
    rent_end:{type:DataTypes.DATE, allowNull:false},
    pickup_point:{type:DataTypes.STRING, allowNull:false},
    dropoff_point:{type:DataTypes.STRING, allowNull:false},
    days:{type:DataTypes.INTEGER},
    hours:{type:DataTypes.INTEGER},
    booking_cost:{type:DataTypes.INTEGER,allowNull:false},
    insurance_cost:{type:DataTypes.INTEGER},
    unlimited_mileage_cost:{type:DataTypes.INTEGER},
    deposit:{type:DataTypes.INTEGER},
    total:{type:DataTypes.INTEGER},
    status:{type:DataTypes.STRING}
})

User.hasMany(Driver_License, {foreignKey:'id_user'})
User.hasMany(Bank_card, {foreignKey:'id_user'})
User.hasMany(Booking, {foreignKey:'id_user'})
Auto.hasMany(Booking, {foreignKey:'auto_registry_number'})

module.exports = {
    User, Driver_License, Bank_card, Booking, Auto
}