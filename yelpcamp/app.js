const express = require('express')
const app = express()
const path = require('path')
const Campground = require('./models/campground')
const mongoose = require('mongoose')
const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/yelpcamp?retryWrites=true&w=majority"
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Database Connected')
    })
    .catch((e)=>{
        console.log('MongoDB Not Connected')
        console.log(e)
    })

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))






app.get('/',(req,res)=>{
    res.render('home')
})

// Campground page
app.get('/campgrounds',async (req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
})


// campground shoe route
app.get('/campgrounds/:id',async (req,res)=>{
    const {id} = req.params
    const camp = await Campground.findById(id)
    res.render('campgrounds/show',{camp})
})











const port = 3000
app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})