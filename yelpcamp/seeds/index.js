const Campground = require('../models/campground')
const cities = require('./cities')
const { places, descriptors } = require('./seedshelper')
const mongoose = require('mongoose')
const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/yelpcamp?retryWrites=true&w=majority"
mongoose.connect(DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database Connected')
    })
    .catch((e) => {
        console.log('MongoDB Not Connected')
        console.log(e)
    })


const sample = arr => arr[Math.floor(Math.random() * arr.length)];


const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i <= 50; i++) {
        const rand1000 = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            location: `${cities[rand1000].city},${cities[rand1000].state}`,
            title:`${sample(descriptors)} ${sample(places)}`})
        await camp.save()
    }
}




seedDB().then(()=>{
    mongoose.connection.close()
})