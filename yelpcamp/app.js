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
app.use(express.urlencoded({extended:true}))
app.use(methodoverride('_method'))






app.get('/',(req,res)=>{
    res.render('home');
})

// Campground page
app.get('/campgrounds',async (req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
})

// new Camp
app.get('/campgrounds/newcamp',(req,res)=>{
    res.render('campgrounds/new');
})

app.post('/campgrounds',async (req,res)=>{
    const {title,location}=req.body.campground;
    const newCamp = new Campground({title:title,location:location})
    await newCamp.save()
    res.redirect(`/campgrounds/${newCamp._id}`)
})

// campground shoe route
app.get('/campgrounds/:id',async (req,res)=>{
    const {id} = req.params
    const camp = await Campground.findById(id)
    res.render('campgrounds/show',{camp})
})

app.get('/campgrounds/:id/editcamp',(req,res)=>{
    const {id} = req.params;
    const findCamp = Campground.findById(id)
    res.render('campgrounds/editcamp',{findCamp})
})








const port = 3000
app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})